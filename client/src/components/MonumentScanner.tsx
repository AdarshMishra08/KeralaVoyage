@@ .. @@
import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin, Info, Volume2, Languages } from "lucide-react";

interface MonumentScannerProps {
  isScanning?: boolean;
  onStartScan?: () => void;
  onLanguageChange?: (language: string) => void;
}

interface ScanResult {
  name: {
    english: string;
    malayalam: string;
    hindi: string;
  };
  location: string;
  built: string;
  significance: {
    english: string;
    malayalam: string;
    hindi: string;
  };
}

export default function MonumentScanner({ isScanning = false, onStartScan, onLanguageChange }: MonumentScannerProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Mock scan result for demo
  const mockScanResult: ScanResult = {
    name: {
      english: "Mattancherry Palace",
      malayalam: "മട്ടാഞ്ചേരി കൊട്ടാരം",
      hindi: "मट्टानचेरी पैलेस"
    },
    location: "Kochi, Kerala",
    built: "1555 CE",
    significance: {
      english: "Also known as the Dutch Palace, this 16th-century palace showcases Kerala's architectural heritage and houses beautiful murals depicting Hindu temple art.",
      malayalam: "ഡച്ച് കൊട്ടാരം എന്നും അറിയപ്പെടുന്ന ഈ 16-ാം നൂറ്റാണ്ടിലെ കൊട്ടാരം കേരളത്തിന്റെ വാസ്തുവിദ്യാ പൈതൃകം പ്രദർശിപ്പിക്കുകയും ഹിന്ദു ക്ഷേത്ര കലയെ ചിത്രീകരിക്കുന്ന മനോഹരമായ ചുവർചിത്രങ്ങൾ ഉൾക്കൊള്ളുകയും ചെയ്യുന്നു.",
      hindi: "डच पैलेस के नाम से भी जाना जाने वाला, यह 16वीं सदी का महल केरल की स्थापत्य विरासत को प्रदर्शित करता है और हिंदू मंदिर कला को दर्शाने वाले सुंदर भित्ति चित्र हैं।"
    }
  };

  const handleStartScan = () => {
    onStartScan?.();
    console.log('YAATHRI monument scanning started');
    // Simulate scan completion after 2 seconds
    setTimeout(() => {
      setScanResult(mockScanResult);
      console.log('YAATHRI monument scan completed');
    }, 2000);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    onLanguageChange?.(language);
    console.log('YAATHRI language changed to:', language);
  };

  const playAudio = () => {
    console.log('Playing YAATHRI audio description in', selectedLanguage);
    // Implement actual audio playback functionality here
  };

  return (
    <div className="space-y-6">
      {/* Scanner Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            YAATHRI Cultural Scanner
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Discover Kerala's rich heritage through intelligent monument recognition
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Language Selection */}
          <div className="flex items-center gap-4">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedLanguage} onValueChange={handleLanguageSelect}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="malayalam">മലയാളം</SelectItem>
                <SelectItem value="hindi">हिंदी</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Scan Button */}
          <Button 
            onClick={handleStartScan}
            disabled={isScanning}
            className="w-full"
            size="lg"
          >
            {isScanning ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Scanning with YAATHRI...
              </>
            ) : (
              <>
                <Camera className="h-4 w-4 mr-2" />
                Start Cultural Scan
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Scan Results */}
      {scanResult && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {scanResult.name[selectedLanguage as keyof typeof scanResult.name]}
              </CardTitle>
              <Badge variant="secondary">Discovered</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{scanResult.location}</span>
              <span>•</span>
              <span>Built: {scanResult.built}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" />
                Cultural Significance
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {scanResult.significance[selectedLanguage as keyof typeof scanResult.significance]}
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={playAudio}>
                <Volume2 className="h-4 w-4 mr-2" />
                Listen
              </Button>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error State */}
      {error && (
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <div className="text-center text-destructive">
              <p className="font-medium">Scan Failed</p>
              <p className="text-sm mt-1">{error}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3"
                onClick={() => setError(null)}
              >
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Scanner Tips */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <h4 className="font-medium mb-2">YAATHRI Scanner Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Point your camera at monuments, temples, or historical sites</li>
            <li>• Ensure good lighting for better recognition</li>
            <li>• Hold steady for 2-3 seconds during scanning</li>
            <li>• Works offline with pre-loaded Kerala heritage database</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}