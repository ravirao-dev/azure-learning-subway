const learningData = {
  tracks: [
    {
      id: 'silicon',
      name: 'Silicon Track',
      color: '#FF6B35',
      description: 'Master hardware fundamentals and Azure silicon integration',
      stations: [
        {
          id: 'silicon-start',
          name: 'Digital Electronics Fundamentals',
          x: 100,
          y: 100,
          type: 'start',
          description: 'Foundation of digital systems and computer architecture',
          resources: [
            { type: 'article', title: 'Digital Logic Design Basics', url: 'https://learn.microsoft.com/en-us/training/modules/intro-to-logic/' },
            { type: 'video', title: 'Computer Architecture Overview', url: 'https://www.youtube.com/watch?v=O5nskjZ_GoI' },
            { type: 'book', title: 'Computer Organization and Design (Patterson & Hennessy)', url: 'https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269' }
          ]
        },
        {
          id: 'cpu-arch',
          name: 'CPU Architecture & ISA',
          x: 300,
          y: 100,
          description: 'Instruction Set Architecture, x86/ARM fundamentals',
          resources: [
            { type: 'article', title: 'Intel Architecture Manual', url: 'https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html' },
            { type: 'article', title: 'AMD64 Architecture', url: 'https://www.amd.com/system/files/TechDocs/24593.pdf' },
            { type: 'video', title: 'ARM vs x86 Architecture', url: 'https://www.youtube.com/watch?v=AADZo65sfv8' }
          ]
        },
        {
          id: 'memory-systems',
          name: 'Memory Hierarchies & Cache',
          x: 500,
          y: 100,
          description: 'Cache coherency, memory controllers, NUMA',
          resources: [
            { type: 'article', title: 'Cache Coherency Protocols', url: 'https://en.wikipedia.org/wiki/Cache_coherency' },
            { type: 'article', title: 'NUMA Deep Dive', url: 'https://frankdenneman.nl/2016/07/07/numa-deep-dive-part-1-uma-numa/' },
            { type: 'video', title: 'Memory Hierarchy Explained', url: 'https://www.youtube.com/watch?v=vjYF_fAZI5E' }
          ]
        },
        {
          id: 'silicon-validation',
          name: 'Silicon Validation Process',
          x: 700,
          y: 100,
          description: 'PV, DV, EV stages and validation methodologies',
          resources: [
            { type: 'article', title: 'Silicon Validation Overview', url: 'https://semiengineering.com/knowledge_centers/eda-design/test/silicon-validation/' },
            { type: 'article', title: 'Pre-Silicon vs Post-Silicon Validation', url: 'https://www.design-reuse.com/articles/47926/pre-silicon-validation-vs-post-silicon-validation.html' },
            { type: 'video', title: 'Intel Validation Process', url: 'https://www.intel.com/content/www/us/en/architecture-and-technology/validation.html' }
          ]
        },
        {
          id: 'gpu-acceleration',
          name: 'GPU Architecture & GPGPU',
          x: 100,
          y: 250,
          description: 'GPU fundamentals, CUDA, compute workloads',
          resources: [
            { type: 'article', title: 'NVIDIA GPU Architecture', url: 'https://developer.nvidia.com/blog/inside-volta/' },
            { type: 'article', title: 'CUDA Programming Guide', url: 'https://docs.nvidia.com/cuda/cuda-c-programming-guide/' },
            { type: 'video', title: 'GPU Computing Explained', url: 'https://www.youtube.com/watch?v=fKK933KK6Gg' }
          ]
        },
        {
          id: 'interconnects',
          name: 'System Interconnects',
          x: 300,
          y: 250,
          description: 'PCIe, CXL, NVLink, fabric technologies',
          resources: [
            { type: 'article', title: 'PCIe Architecture Deep Dive', url: 'https://pcisig.com/specifications' },
            { type: 'article', title: 'CXL (Compute Express Link) Overview', url: 'https://www.computeexpresslink.org/' },
            { type: 'video', title: 'Modern Interconnect Technologies', url: 'https://www.youtube.com/watch?v=bX6qtHw3QHo' }
          ]
        },
        {
          id: 'vendor-partnerships',
          name: 'Vendor Partnership Management',
          x: 500,
          y: 250,
          description: 'Working with Intel, AMD, NVIDIA partners',
          resources: [
            { type: 'article', title: 'Intel Partner Hub', url: 'https://www.intel.com/content/www/us/en/partner/overview.html' },
            { type: 'article', title: 'AMD Developer Resources', url: 'https://developer.amd.com/' },
            { type: 'article', title: 'NVIDIA Developer Program', url: 'https://developer.nvidia.com/' }
          ]
        },
        {
          id: 'azure-silicon-integration',
          name: 'Azure Silicon Integration',
          x: 700,
          y: 250,
          type: 'end',
          description: 'OS-level support for new Azure hardware SKUs',
          resources: [
            { type: 'article', title: 'Azure Compute SKU Overview', url: 'https://docs.microsoft.com/en-us/azure/virtual-machines/sizes' },
            { type: 'article', title: 'Azure Hardware Innovation', url: 'https://azure.microsoft.com/en-us/blog/microsoft-azure-hardware-innovations/' },
            { type: 'video', title: 'Azure Infrastructure Deep Dive', url: 'https://www.youtube.com/watch?v=X-0V6bYfTpA' }
          ]
        }
      ],
      connections: [
        { from: 'silicon-start', to: 'cpu-arch' },
        { from: 'cpu-arch', to: 'memory-systems' },
        { from: 'memory-systems', to: 'silicon-validation' },
        { from: 'silicon-start', to: 'gpu-acceleration' },
        { from: 'gpu-acceleration', to: 'interconnects' },
        { from: 'interconnects', to: 'vendor-partnerships' },
        { from: 'vendor-partnerships', to: 'azure-silicon-integration' },
        { from: 'silicon-validation', to: 'azure-silicon-integration' }
      ]
    },
    {
      id: 'virtualization',
      name: 'Virtualization Track',
      color: '#4ECDC4',
      description: 'Deep dive into Hyper-V and Azure virtualization',
      stations: [
        {
          id: 'virt-start',
          name: 'Virtualization Fundamentals',
          x: 100,
          y: 400,
          type: 'start',
          description: 'Basic concepts of virtualization and hypervisors',
          resources: [
            { type: 'article', title: 'Introduction to Virtualization', url: 'https://docs.microsoft.com/en-us/virtualization/' },
            { type: 'video', title: 'Virtualization Explained', url: 'https://www.youtube.com/watch?v=l0DfHUWMjsU' },
            { type: 'article', title: 'Type 1 vs Type 2 Hypervisors', url: 'https://www.vmware.com/topics/glossary/content/hypervisor' }
          ]
        },
        {
          id: 'hypervisor-arch',
          name: 'Hypervisor Architecture',
          x: 300,
          y: 400,
          description: 'VMM design, privilege levels, trap-and-emulate',
          resources: [
            { type: 'article', title: 'Hypervisor Architecture Basics', url: 'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hypervisor-architecture' },
            { type: 'article', title: 'x86 Virtualization Challenges', url: 'https://www.vmware.com/pdf/asplos235_adams.pdf' },
            { type: 'video', title: 'How Hypervisors Work', url: 'https://www.youtube.com/watch?v=QkKovO7C0KU' }
          ]
        },
        {
          id: 'hardware-assist',
          name: 'Hardware Virtualization',
          x: 500,
          y: 400,
          description: 'Intel VT-x, AMD-V, IOMMU, SR-IOV',
          resources: [
            { type: 'article', title: 'Intel VT-x Technology', url: 'https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html' },
            { type: 'article', title: 'AMD-V Virtualization', url: 'https://developer.amd.com/resources/developer-guides-manuals/' },
            { type: 'article', title: 'SR-IOV Explained', url: 'https://docs.microsoft.com/en-us/windows-hardware/drivers/network/overview-of-single-root-i-o-virtualization--sr-iov-' }
          ]
        },
        {
          id: 'hyper-v-deep',
          name: 'Hyper-V Deep Dive',
          x: 700,
          y: 400,
          description: 'Hyper-V architecture, partition management',
          resources: [
            { type: 'article', title: 'Hyper-V Architecture', url: 'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-architecture' },
            { type: 'article', title: 'Hyper-V Internals', url: 'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/' },
            { type: 'video', title: 'Hyper-V Technical Deep Dive', url: 'https://www.youtube.com/watch?v=1zKgz4p_pb8' }
          ]
        },
        {
          id: 'memory-virt',
          name: 'Memory Virtualization',
          x: 100,
          y: 550,
          description: 'Shadow paging, EPT/NPT, memory ballooning',
          resources: [
            { type: 'article', title: 'Memory Virtualization Techniques', url: 'https://www.vmware.com/pdf/Perf_ESX_Intel-EPT-eval.pdf' },
            { type: 'article', title: 'Intel EPT Deep Dive', url: 'https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html' },
            { type: 'video', title: 'Memory Management in Hypervisors', url: 'https://www.youtube.com/watch?v=TlnB-BXWi0A' }
          ]
        },
        {
          id: 'io-virt',
          name: 'I/O Virtualization',
          x: 300,
          y: 550,
          description: 'Device emulation, para-virtualization, pass-through',
          resources: [
            { type: 'article', title: 'I/O Virtualization Overview', url: 'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/enhanced-session-mode' },
            { type: 'article', title: 'Hyper-V Synthetic Devices', url: 'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-integration-components' },
            { type: 'video', title: 'Network Virtualization Concepts', url: 'https://www.youtube.com/watch?v=NU4V7XHmEqA' }
          ]
        },
        {
          id: 'nested-virt',
          name: 'Nested Virtualization',
          x: 500,
          y: 550,
          description: 'Running hypervisors inside VMs, complexity challenges',
          resources: [
            { type: 'article', title: 'Nested Virtualization in Hyper-V', url: 'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization' },
            { type: 'article', title: 'Azure Nested Virtualization', url: 'https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nested-virtualization' },
            { type: 'video', title: 'Nested Virtualization Deep Dive', url: 'https://www.youtube.com/watch?v=_zKyU6V5D8s' }
          ]
        },
        {
          id: 'azure-hyperv',
          name: 'Azure Hyper-V Mastery',
          x: 700,
          y: 550,
          type: 'end',
          description: 'Production Hyper-V in Azure cloud infrastructure',
          resources: [
            { type: 'article', title: 'Azure Compute Infrastructure', url: 'https://azure.microsoft.com/en-us/blog/azure-compute-innovations/' },
            { type: 'article', title: 'Hyper-V Best Practices', url: 'https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/best-practices-for-running-linux-on-hyper-v' },
            { type: 'video', title: 'Azure Infrastructure at Scale', url: 'https://www.youtube.com/watch?v=X-0V6bYfTpA' }
          ]
        }
      ],
      connections: [
        { from: 'virt-start', to: 'hypervisor-arch' },
        { from: 'hypervisor-arch', to: 'hardware-assist' },
        { from: 'hardware-assist', to: 'hyper-v-deep' },
        { from: 'virt-start', to: 'memory-virt' },
        { from: 'memory-virt', to: 'io-virt' },
        { from: 'io-virt', to: 'nested-virt' },
        { from: 'nested-virt', to: 'azure-hyperv' },
        { from: 'hyper-v-deep', to: 'azure-hyperv' }
      ]
    },
    {
      id: 'security',
      name: 'Security Track',
      color: '#FF6B9D',
      description: 'Master Azure security and confidential computing',
      stations: [
        {
          id: 'security-start',
          name: 'Security Fundamentals',
          x: 100,
          y: 700,
          type: 'start',
          description: 'Core security principles and threat modeling',
          resources: [
            { type: 'article', title: 'Security Fundamentals', url: 'https://docs.microsoft.com/en-us/learn/paths/security-fundamentals/' },
            { type: 'article', title: 'Microsoft Security Development Lifecycle', url: 'https://www.microsoft.com/en-us/securityengineering/sdl/' },
            { type: 'video', title: 'Introduction to Cybersecurity', url: 'https://www.youtube.com/watch?v=U_P23SqJaDc' }
          ]
        },
        {
          id: 'crypto-foundations',
          name: 'Cryptographic Foundations',
          x: 300,
          y: 700,
          description: 'Encryption, hashing, digital signatures, PKI',
          resources: [
            { type: 'article', title: 'Cryptography Basics', url: 'https://docs.microsoft.com/en-us/dotnet/standard/security/cryptography-model' },
            { type: 'article', title: 'Understanding PKI', url: 'https://docs.microsoft.com/en-us/windows/win32/seccertenroll/public-key-infrastructure' },
            { type: 'video', title: 'Modern Cryptography Explained', url: 'https://www.youtube.com/watch?v=jhXCTbFnK8o' }
          ]
        },
        {
          id: 'hardware-security',
          name: 'Hardware Security',
          x: 500,
          y: 700,
          description: 'TPM, secure boot, hardware attestation',
          resources: [
            { type: 'article', title: 'TPM Fundamentals', url: 'https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/trusted-platform-module-overview' },
            { type: 'article', title: 'UEFI Secure Boot', url: 'https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-secure-boot' },
            { type: 'video', title: 'Hardware Security Overview', url: 'https://www.youtube.com/watch?v=3YZBtOv_vdY' }
          ]
        },
        {
          id: 'vbs-architecture',
          name: 'VBS Architecture',
          x: 700,
          y: 700,
          description: 'Virtualization Based Security deep dive',
          resources: [
            { type: 'article', title: 'VBS Overview', url: 'https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-vbs' },
            { type: 'article', title: 'Hypervisor Code Integrity', url: 'https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/enable-virtualization-based-protection-of-code-integrity' },
            { type: 'video', title: 'VBS Technical Deep Dive', url: 'https://www.youtube.com/watch?v=8T8VqsqOi_E' }
          ]
        },
        {
          id: 'confidential-computing',
          name: 'Confidential Computing',
          x: 100,
          y: 850,
          description: 'TEEs, Intel SGX, AMD SEV, ARM TrustZone',
          resources: [
            { type: 'article', title: 'Confidential Computing Overview', url: 'https://confidentialcomputing.io/white-papers-reports/' },
            { type: 'article', title: 'Intel SGX Programming', url: 'https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions.html' },
            { type: 'article', title: 'AMD SEV Architecture', url: 'https://developer.amd.com/sev/' }
          ]
        },
        {
          id: 'azure-confidential',
          name: 'Azure Confidential VMs',
          x: 300,
          y: 850,
          description: 'Azure confidential computing implementation',
          resources: [
            { type: 'article', title: 'Azure Confidential Computing', url: 'https://docs.microsoft.com/en-us/azure/confidential-computing/' },
            { type: 'article', title: 'Confidential VMs on Azure', url: 'https://docs.microsoft.com/en-us/azure/confidential-computing/confidential-vm-overview' },
            { type: 'video', title: 'Azure Confidential Computing Demo', url: 'https://www.youtube.com/watch?v=rT6zMOoLEqI' }
          ]
        },
        {
          id: 'container-security',
          name: 'Container Security',
          x: 500,
          y: 850,
          description: 'Confidential containers, Kubernetes security',
          resources: [
            { type: 'article', title: 'Container Security Best Practices', url: 'https://docs.microsoft.com/en-us/azure/container-instances/container-instances-image-security' },
            { type: 'article', title: 'Confidential Containers', url: 'https://github.com/confidential-containers' },
            { type: 'video', title: 'Securing Containers in Azure', url: 'https://www.youtube.com/watch?v=M_5yd_3Wkeg' }
          ]
        },
        {
          id: 'security-mastery',
          name: 'Azure Security Mastery',
          x: 700,
          y: 850,
          type: 'end',
          description: 'Complete Azure security and confidential computing expertise',
          resources: [
            { type: 'article', title: 'Azure Security Architecture', url: 'https://docs.microsoft.com/en-us/azure/security/fundamentals/architecture' },
            { type: 'article', title: 'Zero Trust Security Model', url: 'https://docs.microsoft.com/en-us/security/zero-trust/' },
            { type: 'video', title: 'Azure Security at Scale', url: 'https://www.youtube.com/watch?v=tMaKnJDlgGk' }
          ]
        }
      ],
      connections: [
        { from: 'security-start', to: 'crypto-foundations' },
        { from: 'crypto-foundations', to: 'hardware-security' },
        { from: 'hardware-security', to: 'vbs-architecture' },
        { from: 'security-start', to: 'confidential-computing' },
        { from: 'confidential-computing', to: 'azure-confidential' },
        { from: 'azure-confidential', to: 'container-security' },
        { from: 'container-security', to: 'security-mastery' },
        { from: 'vbs-architecture', to: 'security-mastery' }
      ]
    }
  ]
};
