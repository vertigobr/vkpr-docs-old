module.exports = {
  docs: [
    {
      type: 'category',
      label: 'VKPR',
      items: [
        'introduction',
        'stacks',
        'roadmap',
        'faq'
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          Local: [
            'guides/local/basic-installation',
            'guides/local/grafana-with-keycloak',
            'guides/local/loki-grafana',
            'guides/local/loki-jaeger-grafana',
          ]
        },
        {
          'Amazon EKS': [
            'guides/eks/installation',
            'guides/eks/velero-setup',
          ]
        },
        {
          'Digital Ocean': [
            'guides/digital-ocean/installation'
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        'advanced_guides/velero-setup',
      ],
    },
  ],
};
