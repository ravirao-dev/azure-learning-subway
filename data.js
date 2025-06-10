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
                description: "Understanding GPU compute, CUDA, and AI accelerators like NVIDIA GB200",
                resources: [
                    { type: "documentation", title: "NVIDIA GPU Architecture", url: "https://developer.nvidia.com/cuda-gpus" },
                    { type: "whitepaper", title: "NVIDIA Hopper Architecture", url: "https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/nvidia-hopper-architecture-whitepaper.pdf" },
                    { type: "documentation", title: "NVIDIA GB200 Grace Blackwell", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" },
                    { type: "course", title: "GPU Programming and Architecture", url: "https://developer.nvidia.com/cuda-toolkit" }
                ]
            },
            {
                id: "silicon-4",
                name: "Intel & AMD Generations",
                description: "Understanding specific processor generations like Intel Gen 10, AMD Genoa",
                resources: [
                    { type: "documentation", title: "Intel Xeon Scalable Processors", url: "https://www.intel.com/content/www/us/en/products/docs/processors/xeon/4th-gen-xeon-scalable-processors.html" },
                    { type: "documentation", title: "AMD EPYC Genoa Processors", url: "https://www.amd.com/en/products/cpu/amd-epyc-genoa" },
                    { type: "article", title: "Intel Ice Lake Architecture", url: "https://en.wikichip.org/wiki/intel/microarchitectures/ice_lake_(server)" },
                    { type: "whitepaper", title: "AMD Zen 4 Architecture", url: "https://www.amd.com/en/support/tech-docs/zen-4-architecture" }
                ]
            },
            {
                id: "silicon-5",
                name: "Silicon Validation Process",
                description: "Understanding PV (Pre-Validation), DV (Design Validation), EV (Engineering Validation) stages",
                resources: [
                    { type: "article", title: "Silicon Validation Methodology", url: "https://www.intel.com/content/www/us/en/developer/articles/technical/silicon-validation.html" },
                    { type: "whitepaper", title: "Pre-Silicon Validation Techniques", url: "https://www.synopsys.com/verification/simulation/pre-silicon-validation.html" },
                    { type: "presentation", title: "Post-Silicon Debug and Validation", url: "https://www.design-reuse.com/articles/25442/post-silicon-debug-validation.html" },
                    { type: "guide", title: "Hardware Bring-up Best Practices", url: "https://www.embedded.com/hardware-bring-up-best-practices/" }
                ]
            },
            {
                id: "silicon-6",
                name: "Hardware-OS Interface",
                description: "ACPI, UEFI, device drivers, and hardware abstraction layers",
                resources: [
                    { type: "documentation", title: "ACPI Specification", url: "https://uefi.org/specifications" },
                    { type: "documentation", title: "UEFI Specification", url: "https://uefi.org/specifications" },
                    { type: "article", title: "Windows Hardware Compatibility", url: "https://docs.microsoft.com/en-us/windows-hardware/" },
                    { type: "guide", title: "Device Driver Development", url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/" }
                ]
            },
            {
                id: "silicon-7",
                name: "Vendor Partnership Management",
                description: "Working with Intel, AMD, NVIDIA on silicon enablement and tracking deliverables",
                resources: [
                    { type: "article", title: "Strategic Technology Partnerships", url: "https://www.microsoft.com/en-us/research/collaboration/" },
                    { type: "documentation", title: "Intel Partner Alliance", url: "https://www.intel.com/content/www/us/en/partner/alliance/overview.html" },
                    { type: "guide", title: "Hardware Ecosystem Development", url: "https://docs.microsoft.com/en-us/windows-hardware/design/" },
                    { type: "case-study", title: "Microsoft-AMD Partnership", url: "https://news.microsoft.com/2021/01/19/microsoft-and-amd-collaborate-on-azure-hpc/" }
                ]
            },
            {
                id: "silicon-8",
                name: "Azure Silicon Integration",
                description: "Integrating new hardware SKUs into Azure infrastructure and host OS changes",
                resources: [
                    { type: "documentation", title: "Azure Compute SKUs", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/sizes" },
                    { type: "article", title: "Azure Custom Silicon", url: "https://azure.microsoft.com/en-us/blog/announcing-new-azure-vms-with-ampere-altra-arm-processors/" },
                    { type: "case-study", title: "Azure Hardware Innovation", url: "https://news.microsoft.com/features/beneath-the-surface-the-story-of-microsofts-custom-azure-hardware/" },
                    { type: "blog", title: "Azure Host OS Evolution", url: "https://azure.microsoft.com/en-us/blog/microsoft-azure-hosts-and-the-operating-system/" }
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
                    { type: "video", title: "What is Virtualization?", url: "https://www.youtube.com/watch?v=FZR0rG3HKIk" },
                    { type: "article", title: "Microsoft Virtualization Overview", url: "https://docs.microsoft.com/en-us/virtualization/" }
                ]
            },
            {
                id: "virt-2",
                name: "Hypervisor Architecture",
                description: "Type 1 vs Type 2 hypervisors, VMM (Virtual Machine Monitor) architecture",
                resources: [
                    { type: "whitepaper", title: "Hypervisor Architecture Overview", url: "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/hypervisor-arch-overview.pdf" },
                    { type: "article", title: "Understanding Hypervisor Types", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/" },
                    { type: "research", title: "Modern Hypervisor Design", url: "https://www.microsoft.com/en-us/research/publication/hypervisor-design/" },
                    { type: "documentation", title: "Xen Hypervisor", url: "https://wiki.xenproject.org/wiki/Xen_Project_Software_Overview" }
                ]
            },
            {
                id: "virt-3",
                name: "Hardware Virtualization",
                description: "Intel VT-x, AMD-V, IOMMU, SR-IOV, and hardware-assisted virtualization",
                resources: [
                    { type: "documentation", title: "Intel VT-x Technology", url: "https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html" },
                    { type: "documentation", title: "AMD Virtualization (AMD-V)", url: "https://www.amd.com/en/technologies/virtualization" },
                    { type: "article", title: "SR-IOV Overview", url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/network/overview-of-single-root-i-o-virtualization--sr-iov-" },
                    { type: "whitepaper", title: "IOMMU Technology", url: "https://www.intel.com/content/dam/www/public/us/en/documents/white-papers/virtualization-technology-directed-io-paper.pdf" }
                ]
            },
            {
                id: "virt-4",
                name: "Hyper-V Architecture",
                description: "Microsoft Hyper-V internals, architecture, and implementation details",
                resources: [
                    { type: "documentation", title: "Hyper-V Architecture", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-architecture" },
                    { type: "whitepaper", title: "Hyper-V Internals", url: "https://www.microsoft.com/en-us/download/details.aspx?id=29939" },
                    { type: "book", title: "Mastering Hyper-V", url: "https://www.amazon.com/Mastering-Hyper-V-2016-John-Savill/dp/1119286786" },
                    { type: "video", title: "Hyper-V Deep Dive", url: "https://channel9.msdn.com/Events/TechEd/2014/DCIM-B343" }
                ]
            },
            {
                id: "virt-5",
                name: "Memory Virtualization",
                description: "Memory management in virtualized environments, EPT, NPT",
                resources: [
                    { type: "article", title: "Memory Virtualization Techniques", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-memory-management" },
                    { type: "research", title: "Virtual Memory Management", url: "https://www.microsoft.com/en-us/research/publication/virtual-memory-management/" },
                    { type: "video", title: "Understanding Memory Virtualization", url: "https://channel9.msdn.com/Events/TechEd/2014/DCIM-B362" },
                    { type: "whitepaper", title: "Extended Page Tables (EPT)", url: "https://www.intel.com/content/dam/www/public/us/en/documents/white-papers/page-modification-logging-vmm-white-paper.pdf" }
                ]
            },
            {
                id: "virt-6",
                name: "CPU & I/O Virtualization",
                description: "CPU scheduling, interrupt virtualization, and I/O device virtualization",
                resources: [
                    { type: "article", title: "CPU Virtualization in Hyper-V", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-cpu-virtualization" },
                    { type: "documentation", title: "Hyper-V Synthetic Devices", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/integration-services" },
                    { type: "whitepaper", title: "I/O Virtualization Techniques", url: "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/io-virtualization.pdf" },
                    { type: "research", title: "Interrupt Virtualization", url: "https://www.microsoft.com/en-us/research/publication/interrupt-virtualization/" }
                ]
            },
            {
                id: "virt-7",
                name: "Nested Virtualization",
                description: "Running hypervisors inside virtual machines and associated complexities",
                resources: [
                    { type: "documentation", title: "Nested Virtualization in Hyper-V", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization" },
                    { type: "article", title: "Azure Nested Virtualization", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/acu" },
                    { type: "research", title: "Nested Virtualization Challenges", url: "https://www.microsoft.com/en-us/research/publication/nested-virtualization/" },
                    { type: "blog", title: "Nested Virtualization Performance", url: "https://techcommunity.microsoft.com/t5/virtualization/nested-virtualization-performance-considerations/ba-p/339781" }
                ]
            },
            {
                id: "virt-8",
                name: "Azure Virtualization",
                description: "Hyper-V in Azure, VM generations, and cloud-scale virtualization",
                resources: [
                    { type: "documentation", title: "Azure Virtual Machines", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/" },
                    { type: "architecture", title: "Azure Compute Architecture", url: "https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/n-tier/n-tier-sql-server" },
                    { type: "case-study", title: "Azure Hypervisor Evolution", url: "https://azure.microsoft.com/en-us/blog/the-evolution-of-azure-virtual-machines/" },
                    { type: "documentation", title: "Azure VM Generations", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/generation-2" }
                ]
            },
            {
                id: "virt-9",
                name: "Container Virtualization",
                description: "OS-level virtualization, Docker, Windows containers, and container orchestration",
                resources: [
                    { type: "documentation", title: "Windows Containers", url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/" },
                    { type: "course", title: "Container Fundamentals", url: "https://www.docker.com/101-tutorial" },
                    { type: "article", title: "Containers vs VMs", url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/about/containers-vs-vm" },
                    { type: "documentation", title: "Azure Container Instances", url: "https://docs.microsoft.com/en-us/azure/container-instances/" }
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
                description: "Basic security concepts, threat modeling, and defense in depth principles",
                resources: [
                    { type: "book", title: "Computer Security: Principles and Practice", url: "https://www.amazon.com/Computer-Security-Principles-Practice-4th/dp/0134794109" },
                    { type: "course", title: "Cybersecurity Fundamentals", url: "https://www.coursera.org/learn/cyber-security-fundamentals" },
                    { type: "framework", title: "Microsoft Security Development Lifecycle", url: "https://www.microsoft.com/en-us/securityengineering/sdl" },
                    { type: "guide", title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
                ]
            },
            {
                id: "sec-2",
                name: "Hardware Security",
                description: "TPM (Trusted Platform Module), Secure Boot, hardware root of trust",
                resources: [
                    { type: "documentation", title: "TPM 2.0 Specification", url: "https://trustedcomputinggroup.org/resource/tpm-library-specification/" },
                    { type: "article", title: "Windows Secure Boot", url: "https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process" },
                    { type: "whitepaper", title: "Hardware Root of Trust", url: "https://www.microsoft.com/en-us/research/publication/hardware-root-of-trust/" },
                    { type: "documentation", title: "UEFI Secure Boot", url: "https://uefi.org/sites/default/files/resources/UEFI_Secure_Boot_in_Modern_Computer_Security_Solutions_2013.pdf" }
                ]
            },
            {
                id: "sec-3",
                name: "Virtualization Security",
                description: "Hypervisor security, VM isolation, virtualization attacks and defenses",
                resources: [
                    { type: "research", title: "Hypervisor Security", url: "https://www.microsoft.com/en-us/research/publication/hypervisor-security/" },
                    { type: "article", title: "VM Escape Attacks", url: "https://docs.microsoft.com/en-us/security/engineering/vm-security" },
                    { type: "whitepaper", title: "Secure Virtualization", url: "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/vmware-secure-virtualization.pdf" },
                    { type: "presentation", title: "Virtualization Attack Vectors", url: "https://www.blackhat.com/docs/us-15/materials/us-15-Wojtczuk-Attacking-Intel-TXT-Via-SINIT-Hijacking.pdf" }
                ]
            },
            {
                id: "sec-4",
                name: "VBS Architecture",
                description: "Virtualization-Based Security (VBS) implementation, benefits, and architecture",
                resources: [
                    { type: "documentation", title: "VBS Overview", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/introduction-to-device-guard-virtualization-based-security-and-windows-defender-application-control" },
                    { type: "whitepaper", title: "VBS Technical Deep Dive", url: "https://www.microsoft.com/en-us/download/details.aspx?id=53849" },
                    { type: "video", title: "VBS Architecture Explained", url: "https://channel9.msdn.com/Events/Build/2016/B868" },
                    { type: "documentation", title: "VBS Requirements", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/requirements-and-deployment-planning-guidelines-for-virtualization-based-protection-of-code-integrity" }
                ]
            },
            {
                id: "sec-5",
                name: "Credential Guard & HVCI",
                description: "Protecting credentials and code integrity with VBS technologies",
                resources: [
                    { type: "documentation", title: "Credential Guard", url: "https://docs.microsoft.com/en-us/windows/security/identity-protection/credential-guard/" },
                    { type: "documentation", title: "HVCI Overview", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/hypervisor-protected-code-integrity" },
                    { type: "deployment", title: "VBS Deployment Guide", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/deploy-device-guard-deploy-code-integrity-policies" },
                    { type: "article", title: "Windows Defender System Guard", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-system-guard/" }
                ]
            },
            {
                id: "sec-6",
                name: "Trusted Execution Environments",
                description: "TEEs, Intel SGX, AMD SEV, ARM TrustZone, and secure enclaves",
                resources: [
                    { type: "overview", title: "Confidential Computing Consortium", url: "https://confidentialcomputing.io/" },
                    { type: "documentation", title: "Intel SGX", url: "https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions.html" },
                    { type: "documentation", title: "AMD SEV", url: "https://developer.amd.com/sev/" },
                    { type: "whitepaper", title: "ARM TrustZone", url: "https://developer.arm.com/documentation/100690/0200" }
                ]
            },
            {
                id: "sec-7",
                name: "Confidential Computing",
                description: "Data protection in use, homomorphic encryption, and secure multi-party computation",
                resources: [
                    { type: "documentation", title: "Azure Confidential Computing", url: "https://docs.microsoft.com/en-us/azure/confidential-computing/" },
                    { type: "whitepaper", title: "Confidential Computing Deep Dive", url: "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4FhZn" },
                    { type: "research", title: "Homomorphic Encryption", url: "https://www.microsoft.com/en-us/research/project/homomorphic-encryption/" },
                    { type: "article", title: "Secure Multi-party Computation", url: "https://www.microsoft.com/en-us/research/project/secure-multi-party-computation/" }
                ]
            },
            {
                id: "sec-8",
                name: "Azure Confidential VMs",
                description: "Implementing confidential computing in Azure virtual machines",
                resources: [
                    { type: "documentation", title: "Azure Confidential VMs", url: "https://docs.microsoft.com/en-us/azure/confidential-computing/confidential-vm-overview" },
                    { type: "blog", title: "DCsv2 and DCdsv2 VMs", url: "https://azure.microsoft.com/en-us/blog/introducing-azure-confidential-computing/" },
                    { type: "case-study", title: "Confidential Computing Use Cases", url: "https://azure.microsoft.com/en-us/solutions/confidential-compute/" },
                    { type: "tutorial", title: "Deploy Confidential VMs", url: "https://docs.microsoft.com/en-us/azure/confidential-computing/quick-create-portal" }
                ]
            },
            {
                id: "sec-9",
                name: "Confidential Containers",
                description: "Securing containerized workloads with hardware-based protection",
                resources: [
                    { type: "documentation", title: "Azure Container Instances - Confidential", url: "https://docs.microsoft.com/en-us/azure/container-instances/container-instances-confidential-overview" },
                    { type: "article", title: "Confidential Containers Architecture", url: "https://github.com/confidential-containers/confidential-containers" },
                    { type: "demo", title: "Confidential AKS", url: "https://docs.microsoft.com/en-us/azure/aks/confidential-computing-add-on" },
                    { type: "blog", title: "Kata Containers with TEEs", url: "https://katacontainers.io/learn/" }
                ]
            },
            {
                id: "sec-10",
                name: "Security Monitoring & Response",
                description: "Detecting and responding to security threats in virtualized environments",
                resources: [
                    { type: "documentation", title: "Azure Security Center", url: "https://docs.microsoft.com/en-us/azure/security-center/" },
                    { type: "tool", title: "Microsoft Defender for Cloud", url: "https://docs.microsoft.com/en-us/azure/defender-for-cloud/" },
                    { type: "methodology", title: "Incident Response", url: "https://docs.microsoft.com/en-us/security/compass/incident-response-overview" },
                    { type: "framework", title: "Azure Security Benchmark", url: "https://docs.microsoft.com/en-us/security/benchmark/azure/" }
                ]
            }
        ]
    }
};
