const learningTracks = {
    silicon: {
        name: "Silicon Track",
        color: "#FF6B35",
        stations: [
            {
                id: "silicon-1",
                name: "Computer Architecture Basics",
                description: "Understanding CPU fundamentals, instruction sets, and computer organization",
                resources: [
                    { type: "book", title: "Computer Organization and Design", url: "https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269" },
                    { type: "course", title: "Coursera - Computer Architecture", url: "https://www.coursera.org/learn/comparch" },
                    { type: "video", title: "Introduction to Computer Architecture", url: "https://www.youtube.com/watch?v=zLP_X4wyHbY" }
                ]
            },
            {
                id: "silicon-2",
                name: "Processor Technologies",
                description: "Deep dive into Intel, AMD, and ARM processor architectures",
                resources: [
                    { type: "documentation", title: "Intel Architecture Manuals", url: "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html" },
                    { type: "documentation", title: "AMD Architecture Programmer's Manual", url: "https://www.amd.com/en/support/tech-docs" },
                    { type: "article", title: "Understanding x86-64 Architecture", url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/x64-architecture" }
                ]
            },
            {
                id: "silicon-3",
                name: "GPU Architecture",
                description: "Understanding GPU compute, CUDA, and AI accelerators",
                resources: [
                    { type: "documentation", title: "NVIDIA GPU Architecture", url: "https://developer.nvidia.com/cuda-gpus" },
                    { type: "whitepaper", title: "NVIDIA Hopper Architecture", url: "https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/nvidia-hopper-architecture-whitepaper.pdf" },
                    { type: "course", title: "GPU Programming and Architecture", url: "https://developer.nvidia.com/cuda-toolkit" }
                ]
            },
            {
                id: "silicon-4",
                name: "Silicon Validation Process",
                description: "Understanding PV, DV, EV stages and silicon bring-up",
                resources: [
                    { type: "article", title: "Silicon Validation Methodology", url: "https://www.intel.com/content/www/us/en/developer/articles/technical/silicon-validation.html" },
                    { type: "whitepaper", title: "Pre-Silicon Validation Techniques", url: "https://www.synopsys.com/verification/simulation/pre-silicon-validation.html" },
                    { type: "presentation", title: "Post-Silicon Debug and Validation", url: "https://www.design-reuse.com/articles/25442/post-silicon-debug-validation.html" }
                ]
            },
            {
                id: "silicon-5",
                name: "Hardware-OS Interface",
                description: "ACPI, UEFI, device drivers, and hardware abstraction",
                resources: [
                    { type: "documentation", title: "ACPI Specification", url: "https://uefi.org/specifications" },
                    { type: "documentation", title: "UEFI Specification", url: "https://uefi.org/specifications" },
                    { type: "article", title: "Windows Hardware Compatibility", url: "https://docs.microsoft.com/en-us/windows-hardware/" }
                ]
            },
            {
                id: "silicon-6",
                name: "Vendor Partnership Management",
                description: "Working with Intel, AMD, NVIDIA on silicon enablement",
                resources: [
                    { type: "article", title: "Strategic Technology Partnerships", url: "https://www.microsoft.com/en-us/research/collaboration/" },
                    { type: "documentation", title: "Intel Partner Alliance", url: "https://www.intel.com/content/www/us/en/partner/alliance/overview.html" },
                    { type: "guide", title: "Hardware Ecosystem Development", url: "https://docs.microsoft.com/en-us/windows-hardware/design/" }
                ]
            },
            {
                id: "silicon-7",
                name: "Azure Silicon Integration",
                description: "Integrating new silicon SKUs into Azure infrastructure",
                resources: [
                    { type: "documentation", title: "Azure Compute SKUs", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/sizes" },
                    { type: "article", title: "Azure Custom Silicon", url: "https://azure.microsoft.com/en-us/blog/announcing-new-azure-vms-with-ampere-altra-arm-processors/" },
                    { type: "case-study", title: "Azure Hardware Innovation", url: "https://news.microsoft.com/features/beneath-the-surface-the-story-of-microsofts-custom-azure-hardware/" }
                ]
            }
        ]
    },
    virtualization: {
        name: "Virtualization Track",
        color: "#4ECDC4",
        stations: [
            {
                id: "virt-1",
                name: "Virtualization Fundamentals",
                description: "Basic concepts of virtualization, hypervisors, and virtual machines",
                resources: [
                    { type: "book", title: "Virtualization Essentials", url: "https://www.amazon.com/Virtualization-Essentials-Matthew-Portnoy/dp/1118176715" },
                    { type: "course", title: "Introduction to Virtualization", url: "https://www.coursera.org/learn/virtualization-fundamentals" },
                    { type: "video", title: "What is Virtualization?", url: "https://www.youtube.com/watch?v=FZR0rG3HKIk" }
                ]
            },
            {
                id: "virt-2",
                name: "Hypervisor Architecture",
                description: "Type 1 vs Type 2 hypervisors, VMM architecture",
                resources: [
                    { type: "whitepaper", title: "Hypervisor Architecture Overview", url: "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/hypervisor-arch-overview.pdf" },
                    { type: "article", title: "Understanding Hypervisor Types", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/" },
                    { type: "research", title: "Modern Hypervisor Design", url: "https://www.microsoft.com/en-us/research/publication/hypervisor-design/" }
                ]
            },
            {
                id: "virt-3",
                name: "Hardware Virtualization",
                description: "Intel VT-x, AMD-V, IOMMU, SR-IOV",
                resources: [
                    { type: "documentation", title: "Intel VT-x Technology", url: "https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html" },
                    { type: "documentation", title: "AMD Virtualization", url: "https://www.amd.com/en/technologies/virtualization" },
                    { type: "article", title: "SR-IOV Overview", url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/network/overview-of-single-root-i-o-virtualization--sr-iov-" }
                ]
            },
            {
                id: "virt-4",
                name: "Hyper-V Architecture",
                description: "Microsoft Hyper-V internals and architecture",
                resources: [
                    { type: "documentation", title: "Hyper-V Architecture", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-architecture" },
                    { type: "whitepaper", title: "Hyper-V Internals", url: "https://www.microsoft.com/en-us/download/details.aspx?id=29939" },
                    { type: "book", title: "Mastering Hyper-V", url: "https://www.amazon.com/Mastering-Hyper-V-2016-John-Savill/dp/1119286786" }
                ]
            },
            {
                id: "virt-5",
                name: "Memory Virtualization",
                description: "Memory management in virtualized environments",
                resources: [
                    { type: "article", title: "Memory Virtualization Techniques", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-memory-management" },
                    { type: "research", title: "Virtual Memory Management", url: "https://www.microsoft.com/en-us/research/publication/virtual-memory-management/" },
                    { type: "video", title: "Understanding Memory Virtualization", url: "https://channel9.msdn.com/Events/TechEd/2014/DCIM-B362" }
                ]
            },
            {
                id: "virt-6",
                name: "Nested Virtualization",
                description: "Running hypervisors inside virtual machines",
                resources: [
                    { type: "documentation", title: "Nested Virtualization in Hyper-V", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization" },
                    { type: "article", title: "Azure Nested Virtualization", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/acu" },
                    { type: "research", title: "Nested Virtualization Challenges", url: "https://www.microsoft.com/en-us/research/publication/nested-virtualization/" }
                ]
            },
            {
                id: "virt-7",
                name: "Azure Virtualization",
                description: "Hyper-V in Azure, VM generations, and cloud-scale virtualization",
                resources: [
                    { type: "documentation", title: "Azure Virtual Machines", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/" },
                    { type: "architecture", title: "Azure Compute Architecture", url: "https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/n-tier/n-tier-sql-server" },
                    { type: "case-study", title: "Azure Hypervisor Evolution", url: "https://azure.microsoft.com/en-us/blog/the-evolution-of-azure-virtual-machines/" }
                ]
            },
            {
                id: "virt-8",
                name: "Container Virtualization",
                description: "OS-level virtualization, Docker, and container orchestration",
                resources: [
                    { type: "documentation", title: "Windows Containers", url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/" },
                    { type: "course", title: "Container Fundamentals", url: "https://www.docker.com/101-tutorial" },
                    { type: "article", title: "Containers vs VMs", url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/about/containers-vs-vm" }
                ]
            }
        ]
    },
    security: {
        name: "Security Track",
        color: "#FF69B4",
        stations: [
            {
                id: "sec-1",
                name: "Security Fundamentals",
                description: "Basic security concepts, threat modeling, and defense in depth",
                resources: [
                    { type: "book", title: "Computer Security: Principles and Practice", url: "https://www.amazon.com/Computer-Security-Principles-Practice-4th/dp/0134794109" },
                    { type: "course", title: "Cybersecurity Fundamentals", url: "https://www.coursera.org/learn/cyber-security-fundamentals" },
                    { type: "framework", title: "Microsoft Security Development Lifecycle", url: "https://www.microsoft.com/en-us/securityengineering/sdl" }
                ]
            },
            {
                id: "sec-2",
                name: "Hardware Security",
                description: "TPM, Secure Boot, hardware root of trust",
                resources: [
                    { type: "documentation", title: "TPM 2.0 Specification", url: "https://trustedcomputinggroup.org/resource/tpm-library-specification/" },
                    { type: "article", title: "Windows Secure Boot", url: "https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process" },
                    { type: "whitepaper", title: "Hardware Root of Trust", url: "https://www.microsoft.com/en-us/research/publication/hardware-root-of-trust/" }
                ]
            },
            {
                id: "sec-3",
                name: "Virtualization Security",
                description: "Hypervisor security, VM isolation, and virtualization attacks",
                resources: [
                    { type: "research", title: "Hypervisor Security", url: "https://www.microsoft.com/en-us/research/publication/hypervisor-security/" },
                    { type: "article", title: "VM Escape Attacks", url: "https://docs.microsoft.com/en-us/security/engineering/vm-security" },
                    { type: "whitepaper", title: "Secure Virtualization", url: "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/vmware-secure-virtualization.pdf" }
                ]
            },
            {
                id: "sec-4",
                name: "VBS Architecture",
                description: "Virtualization-Based Security implementation and benefits",
                resources: [
                    { type: "documentation", title: "VBS Overview", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/introduction-to-device-guard-virtualization-based-security-and-windows-defender-application-control" },
                    { type: "whitepaper", title: "VBS Technical Deep Dive", url: "https://www.microsoft.com/en-us/download/details.aspx?id=53849" },
                    { type: "video", title: "VBS Architecture Explained", url: "https://channel9.msdn.com/Events/Build/2016/B868" }
                ]
            },
            {
                id: "sec-5",
                name: "Credential Guard & HVCI",
                description: "Protecting credentials and code integrity with VBS",
                resources: [
                    { type: "documentation", title: "Credential Guard", url: "https://docs.microsoft.com/en-us/windows/security/identity-protection/credential-guard/" },
                    { type: "documentation", title: "HVCI Overview", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/hypervisor-protected-code-integrity" },
                    { type: "deployment", title: "VBS Deployment Guide", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/deploy-device-guard-deploy-code-integrity-policies" }
                ]
            },
            {
                id: "sec-6",
                name: "Confidential Computing",
                description: "TEEs, Intel SGX, AMD SEV, and data protection in use",
                resources: [
                    { type: "overview", title: "Confidential Computing Consortium", url: "https://confidentialcomputing.io/" },
                    { type: "documentation", title: "Intel SGX", url: "https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions.html" },
                    { type: "documentation", title: "AMD SEV", url: "https://developer.amd.com/sev/" }
                ]
            },
            {
                id: "sec-7",
                name: "Azure Confidential VMs",
                description: "Implementing confidential computing in Azure",
                resources: [
                    { type: "documentation", title: "Azure Confidential Computing", url: "https://docs.microsoft.com/en-us/azure/confidential-computing/" },
                    { type: "article", title: "Azure Confidential VMs", url: "https://docs.microsoft.com/en-us/azure/confidential-computing/confidential-vm-overview" },
                    { type: "case-study", title: "Confidential Computing Use Cases", url: "https://azure.microsoft.com/en-us/solutions/confidential-compute/" }
                ]
            },
            {
                id: "sec-8",
                name: "Confidential Containers",
                description: "Securing containerized workloads with hardware-based protection",
                resources: [
                    { type: "documentation", title: "Azure Container Instances - Confidential", url: "https://docs.microsoft.com/en-us/azure/container-instances/container-instances-confidential-overview" },
                    { type: "article", title: "Confidential Containers Architecture", url: "https://github.com/confidential-containers/confidential-containers" },
                    { type: "demo", title: "Confidential AKS", url: "https://docs.microsoft.com/en-us/azure/aks/confidential-computing-add-on" }
                ]
            },
            {
                id: "sec-9",
                name: "Security Monitoring & Response",
                description: "Detecting and responding to security threats in virtualized environments",
                resources: [
                    { type: "documentation", title: "Azure Security Center", url: "https://docs.microsoft.com/en-us/azure/security-center/" },
                    { type: "tool", title: "Microsoft Defender for Cloud", url: "https://docs.microsoft.com/en-us/azure/defender-for-cloud/" },
                    { type: "methodology", title: "Incident Response", url: "https://docs.microsoft.com/en-us/security/compass/incident-response-overview" }
                ]
            }
        ]
    }
};
