const learningData = {
    tracks: {
        silicon: {
            name: "Silicon Track",
            color: "#3182ce",
            stations: [
                {
                    id: "arch-basics",
                    name: "Computer Architecture Basics",
                    x: 100, y: 150,
                    resources: {
                        primary: [
                            { title: "Computer Organization and Design (Patterson & Hennessy)", url: "https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269" },
                            { title: "MIT 6.004 Computer Architecture", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017/" }
                        ],
                        documentation: [
                            { title: "Intel Architecture Manuals", url: "https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html" }
                        ]
                    }
                },
                {
                    id: "processor-fundamentals",
                    name: "Processor Fundamentals",
                    x: 250, y: 150,
                    prerequisites: ["arch-basics"],
                    resources: {
                        primary: [
                            { title: "What Every Programmer Should Know About Memory", url: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf" },
                            { title: "Intel x64 Assembly Introduction", url: "https://software.intel.com/content/www/us/en/develop/articles/introduction-to-x64-assembly.html" }
                        ],
                        documentation: [
                            { title: "AMD64 Architecture Manual", url: "https://www.amd.com/system/files/TechDocs/40332.pdf" }
                        ]
                    }
                },
                {
                    id: "modern-cpu",
                    name: "Modern CPU Features",
                    x: 400, y: 150,
                    prerequisites: ["processor-fundamentals"],
                    intersections: ["cpu-virtualization"],
                    resources: {
                        primary: [
                            { title: "Intel Virtualization Technology", url: "https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html" },
                            { title: "ARM Virtualization Guide", url: "https://developer.arm.com/documentation/100942/0100" }
                        ]
                    }
                },
                {
                    id: "platform-arch",
                    name: "Server Platform Architecture",
                    x: 100, y: 250,
                    prerequisites: ["arch-basics"],
                    resources: {
                        primary: [
                            { title: "UEFI Specification", url: "https://uefi.org/specifications" },
                            { title: "ACPI Specification", url: "https://uefi.org/acpi/specs" }
                        ]
                    }
                },
                {
                    id: "memory-systems",
                    name: "Memory Systems Deep Dive",
                    x: 250, y: 250,
                    prerequisites: ["processor-fundamentals", "platform-arch"],
                    intersections: ["memory-virtualization"],
                    resources: {
                        primary: [
                            { title: "Memory Systems: Cache, DRAM, Disk", url: "https://www.amazon.com/Memory-Systems-Cache-DRAM-Disk/dp/0123797519" },
                            { title: "DDR5 JEDEC Standard", url: "https://www.jedec.org/standards-documents/docs/jesd79-5" }
                        ]
                    }
                },
                {
                    id: "interconnects",
                    name: "Interconnects and Fabric",
                    x: 400, y: 250,
                    prerequisites: ["memory-systems"],
                    resources: {
                        primary: [
                            { title: "CXL Specification", url: "https://www.computeexpresslink.org/download-the-specification" },
                            { title: "PCIe Base Specification", url: "https://pcisig.com/specifications" }
                        ]
                    }
                },
                {
                    id: "gpu-arch",
                    name: "GPU Architecture",
                    x: 100, y: 350,
                    prerequisites: ["modern-cpu"],
                    resources: {
                        primary: [
                            { title: "CUDA Programming Guide", url: "https://docs.nvidia.com/cuda/cuda-c-programming-guide/" },
                            { title: "GPU Computing Gems", url: "https://developer.nvidia.com/gpu-computing-gems" }
                        ]
                    }
                },
                {
                    id: "ai-hardware",
                    name: "AI/ML Hardware",
                    x: 250, y: 350,
                    prerequisites: ["gpu-arch"],
                    resources: {
                        primary: [
                            { title: "NVIDIA H100 Architecture", url: "https://www.nvidia.com/en-us/data-center/h100/" },
                            { title: "Intel Gaudi Architecture", url: "https://habana.ai/products/gaudi2/" }
                        ]
                    }
                },
                {
                    id: "silicon-lifecycle",
                    name: "Silicon Lifecycle (PV/DV/EV)",
                    x: 400, y: 350,
                    prerequisites: ["interconnects"],
                    resources: {
                        primary: [
                            { title: "From Sand to Silicon Documentary", url: "https://www.intel.com/content/www/us/en/history/museum-sand-to-silicon-video.html" },
                            { title: "SEMI Manufacturing Standards", url: "https://www.semi.org/en/standards" }
                        ]
                    }
                },
                {
                    id: "hw-validation",
                    name: "Hardware Validation",
                    x: 100, y: 450,
                    prerequisites: ["silicon-lifecycle"],
                    resources: {
                        primary: [
                            { title: "Pre-Silicon Validation Methods", url: "https://www.intel.com/content/www/us/en/programmable/documentation/mwh1409960181641.html" },
                            { title: "Post-Silicon Debug Techniques", url: "https://ieeexplore.ieee.org/document/6522300" }
                        ]
                    }
                },
                {
                    id: "vendor-partnership",
                    name: "Vendor Partnership",
                    x: 250, y: 450,
                    prerequisites: ["hw-validation"],
                    resources: {
                        primary: [
                            { title: "Intel Partner Alliance", url: "https://www.intel.com/content/www/us/en/partner/alliance/overview.html" },
                            { title: "OCP Specifications", url: "https://www.opencompute.org/projects" }
                        ]
                    }
                },
                {
                    id: "azure-silicon",
                    name: "Azure Silicon Integration",
                    x: 400, y: 450,
                    prerequisites: ["vendor-partnership"],
                    intersections: ["azure-confidential"],
                    resources: {
                        primary: [
                            { title: "Inside Azure Datacenter Architecture", url: "https://azure.microsoft.com/en-us/blog/microsoft-showcases-the-azure-cloud-platform/" },
                            { title: "Azure Hardware Specifications", url: "https://docs.microsoft.com/en-us/azure/" }
                        ]
                    }
                }
            ]
        },
        virtualization: {
            name: "Virtualization Track",
            color: "#e53e3e",
            stations: [
                {
                    id: "virt-basics",
                    name: "Virtualization Basics",
                    x: 600, y: 150,
                    resources: {
                        primary: [
                            { title: "Virtual Machines: Versatile Platforms", url: "https://www.amazon.com/Virtual-Machines-Versatile-Platforms-Architecture/dp/1558609105" },
                            { title: "VMware Virtualization Concepts", url: "https://www.vmware.com/topics/glossary/content/virtualization" }
                        ]
                    }
                },
                {
                    id: "hypervisor-arch",
                    name: "Hypervisor Architecture",
                    x: 750, y: 150,
                    prerequisites: ["virt-basics"],
                    resources: {
                        primary: [
                            { title: "Xen and the Art of Virtualization", url: "https://www.cl.cam.ac.uk/research/srg/netos/papers/2003-xensosp.pdf" },
                            { title: "VMware ESX Architecture", url: "https://www.vmware.com/pdf/esx_architecture.pdf" }
                        ]
                    }
                },
                {
                    id: "cpu-virtualization",
                    name: "CPU Virtualization",
                    x: 550, y: 250,
                    prerequisites: ["hypervisor-arch"],
                    intersections: ["modern-cpu"],
                    resources: {
                        primary: [
                            { title: "Intel VT-x Technology", url: "https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html" },
                            { title: "AMD-V Documentation", url: "https://www.amd.com/system/files/TechDocs/33047.pdf" }
                        ]
                    }
                },
                {
                    id: "memory-virtualization",
                    name: "Memory Virtualization",
                    x: 700, y: 250,
                    prerequisites: ["cpu-virtualization"],
                    intersections: ["memory-systems"],
                    resources: {
                        primary: [
                            { title: "Intel EPT Documentation", url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html" },
                            { title: "AMD NPT Overview", url: "https://developer.amd.com/wordpress/media/2012/10/NPT-WP-1%201-final-TM.pdf" }
                        ]
                    }
                },
                {
                    id: "io-virtualization",
                    name: "I/O Virtualization",
                    x: 850, y: 250,
                    prerequisites: ["memory-virtualization"],
                    resources: {
                        primary: [
                            { title: "SR-IOV Specification", url: "https://pcisig.com/single-root-io-virtualization-sr-iov" },
                            { title: "Intel VT-d Documentation", url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html" }
                        ]
                    }
                },
                {
                    id: "hyperv-arch",
                    name: "Hyper-V Architecture",
                    x: 600, y: 350,
                    prerequisites: ["io-virtualization"],
                    resources: {
                        primary: [
                            { title: "Windows Internals - Hyper-V", url: "https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189" },
                            { title: "Hyper-V Architecture Guide", url: "https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-architecture" }
                        ]
                    }
                },
                {
                    id: "hyperv-enlightenments",
                    name: "Hyper-V Enlightenments",
                    x: 750, y: 350,
                    prerequisites: ["hyperv-arch"],
                    resources: {
                        primary: [
                            { title: "Hyper-V Enlightenments", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/tlfs" },
                            { title: "VMBus Architecture", url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/vmbus/" }
                        ]
                    }
                },
                {
                    id: "kernel-integration",
                    name: "Windows Kernel Integration",
                    x: 850, y: 350,
                    prerequisites: ["hyperv-enlightenments"],
                    intersections: ["vbs-arch"],
                    resources: {
                        primary: [
                            { title: "Hyper-V Root Partition", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-architecture" },
                            { title: "Windows Driver Model", url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/kernel/" }
                        ]
                    }
                },
                {
                    id: "nested-virt-fundamentals",
                    name: "Nested Virtualization Fundamentals",
                    x: 600, y: 450,
                    prerequisites: ["kernel-integration"],
                    resources: {
                        primary: [
                            { title: "Nested Virtualization Research", url: "https://www.usenix.org/system/files/conference/osdi10/osdi10-ben-yehuda.pdf" },
                            { title: "Intel Nested Virtualization", url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html" }
                        ]
                    }
                },
                {
                    id: "nested-virt-impl",
                    name: "Nested Virtualization Implementation",
                    x: 750, y: 450,
                    prerequisites: ["nested-virt-fundamentals"],
                    resources: {
                        primary: [
                            { title: "Hyper-V Nested Virtualization", url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization" },
                            { title: "KVM Nested Virtualization", url: "https://www.linux-kvm.org/page/Nested_Guests" }
                        ]
                    }
                },
                {
                    id: "container-virt",
                    name: "Container Virtualization",
                    x: 850, y: 450,
                    prerequisites: ["nested-virt-impl"],
                    intersections: ["confidential-containers"],
                    resources: {
                        primary: [
                            { title: "Windows Containers Architecture", url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/about/" },
                            { title: "Hyper-V Containers", url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/hyperv-container" }
                        ]
                    }
                }
            ]
        },
        security: {
            name: "Security Track",
            color: "#38a169",
            stations: [
                {
                    id: "security-basics",
                    name: "Computer Security Basics",
                    x: 1000, y: 150,
                    resources: {
                        primary: [
                            { title: "Computer Security: Principles and Practice", url: "https://www.amazon.com/Computer-Security-Principles-Practice-4th/dp/0134794109" },
                            { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
                        ]
                    }
                },
                {
                    id: "os-security",
                    name: "Operating System Security",
                    x: 1150, y: 150,
                    prerequisites: ["security-basics"],
                    resources: {
                        primary: [
                            { title: "Windows Security Architecture", url: "https://docs.microsoft.com/en-us/windows/security/" },
                            { title: "Linux Security Models", url: "https://www.kernel.org/doc/html/latest/security/" }
                        ]
                    }
                },
                {
                    id: "tpm",
                    name: "Trusted Platform Module",
                    x: 950, y: 250,
                    prerequisites: ["os-security"],
                    resources: {
                        primary: [
                            { title: "TPM 2.0 Specification", url: "https://trustedcomputinggroup.org/resource/tpm-library-specification/" },
                            { title: "Windows TPM Integration", url: "https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/" }
                        ]
                    }
                },
                {
                    id: "hw-security",
                    name: "Hardware Security Features",
                    x: 1100, y: 250,
                    prerequisites: ["tpm"],
                    intersections: ["modern-cpu"],
                    resources: {
                        primary: [
                            { title: "Intel TXT Documentation", url: "https://www.intel.com/content/www/us/en/architecture-and-technology/trusted-execution-technology/" },
                            { title: "ARM TrustZone Architecture", url: "https://developer.arm.com/ip-products/security-ip/trustzone" }
                        ]
                    }
                },
                {
                    id: "hypervisor-security",
                    name: "Hypervisor Security",
                    x: 1250, y: 250,
                    prerequisites: ["hw-security"],
                    intersections: ["hypervisor-arch"],
                    resources: {
                        primary: [
                            { title: "Hypervisor Security Research", url: "https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-li.pdf" },
                            { title: "VM Escape Techniques", url: "https://www.blackhat.com/docs/us-17/wednesday/us-17-Mandal-Fractured-Backbone-Breaking-Modern-OS-Defenses-With-Firmware-Attacks.pdf" }
                        ]
                    }
                },
                {
                    id: "vbs-arch",
                    name: "Virtualization-Based Security",
                    x: 1000, y: 350,
                    prerequisites: ["hypervisor-security"],
                    intersections: ["kernel-integration"],
                    resources: {
                        primary: [
                            { title: "Windows VBS Architecture", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/introduction-to-device-guard-virtualization-based-security-and-windows-defender-application-control" },
                            { title: "Hyper-V Code Integrity", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/enable-virtualization-based-protection-of-code-integrity" }
                        ]
                    }
                },
                {
                    id: "device-guard",
                    name: "Device Guard & Credential Guard",
                    x: 1150, y: 350,
                    prerequisites: ["vbs-arch"],
                    resources: {
                        primary: [
                            { title: "Windows Device Guard", url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/" },
                            { title: "Credential Guard Architecture", url: "https://docs.microsoft.com/en-us/windows/security/identity-protection/credential-guard/" }
                        ]
                    }
                },
                {
                    id: "confidential-computing",
                    name: "Confidential Computing Fundamentals",
                    x: 950, y: 450,
                    prerequisites: ["device-guard"],
                    resources: {
                        primary: [
                            { title: "Confidential Computing Consortium", url: "https://confidentialcomputing.io/" },
                            { title: "Introduction to Confidential Computing", url: "https://confidentialcomputing.io/wp-content/uploads/sites/85/2019/12/CCC_Overview.pdf" }
                        ]
                    }
                },
                {
                    id: "hardware-tees",
                    name: "Hardware TEEs",
                    x: 1100, y: 450,
                    prerequisites: ["confidential-computing"],
                    intersections: ["ai-hardware"],
                    resources: {
                        primary: [
                            { title: "Intel SGX Documentation", url: "https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions.html" },
                            { title: "AMD SEV Architecture", url: "https://developer.amd.com/sev/" }
                        ]
                    }
                },
                {
                    id: "azure-confidential",
                    name: "Azure Confidential Computing",
                    x: 1250, y: 450,
                    prerequisites: ["hardware-tees"],
                    intersections: ["azure-silicon"],
                    resources: {
                        primary: [
                            { title: "Azure Confidential Computing", url: "https://azure.microsoft.com/en-us/solutions/confidential-compute/" },
                            { title: "Azure Attestation Service", url: "https://docs.microsoft.com/en-us/azure/attestation/" }
                        ]
                    }
                },
                {
                    id: "memory-encryption",
                    name: "Memory Encryption",
                    x: 950, y: 550,
                    prerequisites: ["azure-confidential"],
                    resources: {
                        primary: [
                            { title: "AMD SEV-SNP", url: "https://www.amd.com/system/files/TechDocs/SEV-SNP-strengthening-vm-isolation-with-integrity-protection-and-more.pdf" },
                            { title: "Intel TME Documentation", url: "https://software.intel.com/content/www/us/en/develop/articles/intel-total-memory-encryption.html" }
                        ]
                    }
                },
                {
                    id: "secure-boot",
                    name: "Secure Boot & Attestation",
                    x: 1100, y: 550,
                    prerequisites: ["memory-encryption"],
                    resources: {
                        primary: [
                            { title: "UEFI Secure Boot", url: "https://uefi.org/sites/default/files/resources/UEFI_Secure_Boot_in_Modern_Computer_Security_Solutions_2013.pdf" },
                            { title: "Remote Attestation Protocols", url: "https://www.intel.com/content/www/us/en/architecture-and-technology/intel-txt/software-development-guide.html" }
                        ]
                    }
                },
                {
                    id: "confidential-containers",
                    name: "Confidential Containers",
                    x: 1250, y: 550,
                    prerequisites: ["secure-boot"],
                    intersections: ["container-virt"],
                    resources: {
                        primary: [
                            { title: "Confidential Containers Project", url: "https://github.com/confidential-containers" },
                            { title: "Azure Container Instances Confidential", url: "https://docs.microsoft.com/en-us/azure/container-instances/" }
                        ]
                    }
                }
            ]
        }
    }
};