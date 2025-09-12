import MonumentScanner from '../MonumentScanner';

export default function MonumentScannerExample() {
  return (
    <div className="p-4">
      <MonumentScanner 
        isScanning={false}
        onStartScan={() => console.log('Scanner started')}
        onLanguageChange={(lang) => console.log('Language:', lang)}
      />
    </div>
  );
}