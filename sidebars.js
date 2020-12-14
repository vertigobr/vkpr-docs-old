module.exports = {
  docs: [
    {
      type: 'category',
      label: 'VKPR',
      items: ["introduction", "stacks", "roadmap", "faq"],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        "quickstart",
        "velero-setup",
        {
          "Amazon EKS": ["eks/installation", "eks/velero-setup"]
        },
        {
          "Digital Ocean": ["digital-ocean/installation"]
        }
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          Local: ['guides/local/grafana-with-keycloak']
        }
      ],
    },
  ],
};
