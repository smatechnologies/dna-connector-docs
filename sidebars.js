module.exports = {
  mySidebar: [
    'index',
    {
      type: 'category', 
      label: 'Overview',
      collapsed: true,
      items: [
        'overview/sma-run-dna-job-program',
        'overview/fiserv-dna-subtype',
        'overview/convert-dna-template-program',
      ], 
    },
    {
      type: 'category', 
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/overview',
        'installation/fiserv-dna-connector',
        'installation/fiserv-dna-subtype',
        'installation/sma-run-dna-job-program',
        'installation/convert-dna-template-program',
      ], 
    },
    {
      type: 'category', 
      label: 'Configuration',
      collapsed: true,
      items: [
        'configuration/overview',
        'configuration/opcon-database-connection',
        'configuration/sma-oracle-connection',
        'configuration/sma-dna-query-server',
        'configuration/sma-run-dna-job-program',      
      ], 
    },
    'convert-dna-template',
    {
      type: 'category', 
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/command-line',
        'reference/environment-file',
        'reference/troubleshooting-tips',
        'reference/sma-error-words-file',
      ], 
    },
  ],
};
