module.exports = {
  mySidebar: [
    'index',
    'release-notes',
    'overview',
    {
      type: 'category',
      label: 'Introduction',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'overview/introduction',
      },
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
      link: {
        type: 'doc',
        id: 'installation/overview',
      },
      items: [
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
      link: {
        type: 'doc',
        id: 'configuration/overview',
      },
      items: [
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
      link: {
        type: 'doc',
        id: 'reference/overview',
      },
      items: [
        'reference/command-line',
        'reference/environment-file',
        'reference/troubleshooting-tips',
        'reference/sma-error-words-file',
      ],
    },
  ],
};
