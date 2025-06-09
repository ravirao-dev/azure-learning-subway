const learningData = {
    tracks: {
        silicon: {
            name: "Silicon Track",
            color: "#3182ce",
            startStation: "arch-basics",
            endStation: "azure-silicon",
            stations: [
                {
                    id: "arch-basics",
                    name: "Computer Architecture Basics",
                    x: 100, y: 150,
                    isStart: true,
                    description: "Foundation concepts of computer architecture and design principles",
                    resources: {
                        primary: [
                            { 
                                title: "Computer Organization and Design (Patterson & Hennessy)", 
                                url: "https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269",
                                type: "Book",
                                description: "The definitive textbook on computer organization fundamentals"
                            },
                            { 
                                title: "MIT 6.004 Computer Architecture Lectures", 
                                url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017/",
                                type: "Video Course",
                                description: "Complete MIT course on computation structures and computer architecture"
                            }
                        ],
                        documentation: [
                            { 
                                title: "Intel Architecture Software Developer Manual", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html",
                                type: "Documentation",
                                description: "Official Intel processor architecture reference"
                            }
                        ],
                        videos: [
                            {
                                title: "How a CPU Works - In One Lesson",
                                url: "https://www.youtube.com/watch?v=cNN_tTXABUA",
                                type: "Video",
                                description: "Clear explanation of CPU fundamentals"
                            }
                        ]
                    }
                },
                {
                    id: "processor-fundamentals",
                    name: "Processor Fundamentals",
                    x: 250, y: 150,
                    prerequisites: ["arch-basics"],
                    description: "Deep dive into processor design, instruction sets, and execution models",
                    resources: {
                        primary: [
                            { 
                                title: "What Every Programmer Should Know About Memory", 
                                url: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf",
                                type: "Technical Paper",
                                description: "Comprehensive guide to memory hierarchies and optimization"
                            },
                            { 
                                title: "Intel x64 Assembly Programming", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/introduction-to-x64-assembly.html",
                                type: "Tutorial",
                                description: "Introduction to x64 assembly language programming"
                            }
                        ],
                        documentation: [
                            { 
                                title: "AMD64 Architecture Programmer's Manual", 
                                url: "https://www.amd.com/system/files/TechDocs/40332.pdf",
                                type: "Documentation",
                                description: "Complete AMD64 architecture specification"
                            }
                        ]
                    }
                },
                {
                    id: "modern-cpu",
                    name: "Modern CPU Features",
                    x: 400, y: 150,
                    prerequisites: ["processor-fundamentals"],
                    intersections: ["cpu-virtualization"],
                    description: "Advanced CPU features including virtualization extensions and security enhancements",
                    resources: {
                        primary: [
                            { 
                                title: "Intel Virtualization Technology Overview", 
                                url: "https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html",
                                type: "Whitepaper",
                                description: "Comprehensive overview of Intel VT-x technology"
                            },
                            { 
                                title: "ARM Virtualization Extensions", 
                                url: "https://developer.arm.com/documentation/100942/0100",
                                type: "Documentation",
                                description: "ARM's approach to hardware virtualization support"
                            }
                        ]
                    }
                },
                {
                    id: "platform-arch",
                    name: "Server Platform Architecture",
                    x: 100, y: 250,
                    prerequisites: ["arch-basics"],
                    description: "Server platform components, UEFI, ACPI, and system initialization",
                    resources: {
                        primary: [
                            { 
                                title: "UEFI Specification v2.9", 
                                url: "https://uefi.org/specifications",
                                type: "Specification",
                                description: "Unified Extensible Firmware Interface specification"
                            },
                            { 
                                title: "ACPI Specification v6.4", 
                                url: "https://uefi.org/acpi/specs",
                                type: "Specification", 
                                description: "Advanced Configuration and Power Interface specification"
                            }
                        ]
                    }
                },
                {
                    id: "memory-systems",
                    name: "Memory Systems Deep Dive",
                    x: 250, y: 250,
                    prerequisites: ["processor-fundamentals", "platform-arch"],
                    intersections: ["memory-virtualization"],
                    description: "Memory hierarchies, DDR technologies, and memory controller architectures",
                    resources: {
                        primary: [
                            { 
                                title: "Memory Systems: Cache, DRAM, Disk", 
                                url: "https://www.amazon.com/Memory-Systems-Cache-DRAM-Disk/dp/0123797519",
                                type: "Book",
                                description: "Comprehensive guide to memory system design and optimization"
                            },
                            { 
                                title: "Understanding DDR5", 
                                url: "https://www.jedec.org/standards-documents/docs/jesd79-5",
                                type: "Technical Document",
                                description: "JEDEC standard for DDR5 SDRAM"
                            }
                        ]
                    }
                },
                {
                    id: "interconnects",
                    name: "Interconnects and Fabric",
                    x: 400, y: 250,
                    prerequisites: ["memory-systems"],
                    description: "High-speed interconnects, PCIe, CXL, and fabric architectures",
                    resources: {
                        primary: [
                            { 
                                title: "Compute Express Link (CXL) Specification", 
                                url: "https://www.computeexpresslink.org/download-the-specification",
                                type: "Specification",
                                description: "Industry standard for processor-to-device interconnects"
                            },
                            { 
                                title: "PCIe 6.0 Base Specification", 
                                url: "https://pcisig.com/specifications",
                                type: "Specification",
                                description: "Latest PCIe specification with enhanced features"
                            }
                        ]
                    }
                },
                {
                    id: "gpu-arch",
                    name: "GPU Architecture",
                    x: 100, y: 350,
                    prerequisites: ["modern-cpu"],
                    description: "GPU design principles, compute units, and parallel processing architectures",
                    resources: {
                        primary: [
                            { 
                                title: "CUDA C++ Programming Guide", 
                                url: "https://docs.nvidia.com/cuda/cuda-c-programming-guide/",
                                type: "Programming Guide",
                                description: "Complete guide to CUDA programming and GPU computing"
                            },
                            { 
                                title: "GPU Computing Gems Emerald Edition", 
                                url: "https://developer.nvidia.com/gpu-computing-gems",
                                type: "Book Series",
                                description: "Collection of GPU programming techniques and optimizations"
                            }
                        ]
                    }
                },
                {
                    id: "ai-hardware",
                    name: "AI/ML Hardware",
                    x: 250, y: 350,
                    prerequisites: ["gpu-arch"],
                    description: "Specialized AI accelerators, tensor processing units, and ML workload optimization",
                    resources: {
                        primary: [
                            { 
                                title: "NVIDIA H100 Tensor Core GPU Architecture", 
                                url: "https://www.nvidia.com/en-us/data-center/h100/",
                                type: "Technical Brief",
                                description: "Architecture details of NVIDIA's flagship AI training GPU"
                            },
                            { 
                                title: "Intel Gaudi2 AI Training Processor", 
                                url: "https://habana.ai/products/gaudi2/",
                                type: "Product Overview",
                                description: "Intel's purpose-built AI training accelerator"
                            }
                        ]
                    }
                },
                {
                    id: "silicon-lifecycle",
                    name: "Silicon Lifecycle (PV/DV/EV)",
                    x: 400, y: 350,
                    prerequisites: ["interconnects"],
                    description: "Silicon development phases from pre-silicon validation to production",
                    resources: {
                        primary: [
                            { 
                                title: "Intel: From Sand to Silicon", 
                                url: "https://www.intel.com/content/www/us/en/history/museum-sand-to-silicon-video.html",
                                type: "Documentary",
                                description: "Journey of semiconductor manufacturing process"
                            },
                            { 
                                title: "SEMI International Standards", 
                                url: "https://www.semi.org/en/standards",
                                type: "Industry Standards",
                                description: "Semiconductor manufacturing equipment and materials standards"
                            }
                        ]
                    }
                },
                {
                    id: "hw-validation",
                    name: "Hardware Validation",
                    x: 100, y: 450,
                    prerequisites: ["silicon-lifecycle"],
                    description: "Pre-silicon and post-silicon validation methodologies and tools",
                    resources: {
                        primary: [
                            { 
                                title: "Pre-Silicon Validation Methodology", 
                                url: "https://www.intel.com/content/www/us/en/programmable/documentation/mwh1409960181641.html",
                                type: "Technical Guide",
                                description: "Intel's approach to pre-silicon design validation"
                            },
                            { 
                                title: "Post-Silicon Debug and Validation", 
                                url: "https://ieeexplore.ieee.org/document/6522300",
                                type: "Research Paper",
                                description: "Techniques for post-silicon debugging and validation"
                            }
                        ]
                    }
                },
                {
                    id: "vendor-partnership",
                    name: "Vendor Partnership",
                    x: 250, y: 450,
                    prerequisites: ["hw-validation"],
                    description: "Building and managing relationships with silicon vendors and ecosystem partners",
                    resources: {
                        primary: [
                            { 
                                title: "Intel Partner Alliance Program", 
                                url: "https://www.intel.com/content/www/us/en/partner/alliance/overview.html",
                                type: "Partnership Program",
                                description: "Intel's ecosystem partnership framework"
                            },
                            { 
                                title: "Open Compute Project Specifications", 
                                url: "https://www.opencompute.org/projects",
                                type: "Open Standards",
                                description: "Community-driven hardware design specifications"
                            }
                        ]
                    }
                },
                {
                    id: "azure-silicon",
                    name: "Azure Silicon Integration",
                    x: 400, y: 450,
                    prerequisites: ["vendor-partnership"],
                    intersections: ["azure-confidential"],
                    isEnd: true,
                    description: "Integration of silicon innovations into Azure infrastructure and services",
                    resources: {
                        primary: [
                            { 
                                title: "Inside Azure Datacenter Architecture", 
                                url: "https://azure.microsoft.com/en-us/blog/microsoft-showcases-the-azure-cloud-platform/",
                                type: "Technical Blog",
                                description: "Deep dive into Azure's infrastructure architecture"
                            },
                            { 
                                title: "Azure Hardware Innovations", 
                                url: "https://docs.microsoft.com/en-us/azure/",
                                type: "Documentation",
                                description: "Microsoft's approach to cloud hardware optimization"
                            }
                        ]
                    }
                }
            ]
        },
        virtualization: {
            name: "Virtualization Track",
            color: "#e53e3e",
            startStation: "virt-basics",
            endStation: "container-virt",
            stations: [
                {
                    id: "virt-basics",
                    name: "Virtualization Basics",
                    x: 600, y: 150,
                    isStart: true,
                    description: "Fundamental concepts of virtualization technology and hypervisor architectures",
                    resources: {
                        primary: [
                            { 
                                title: "Virtual Machines: Versatile Platforms for Systems and Processes", 
                                url: "https://www.amazon.com/Virtual-Machines-Versatile-Platforms-Architecture/dp/1558609105",
                                type: "Book",
                                description: "Comprehensive guide to virtual machine architectures and implementations"
                            },
                            { 
                                title: "VMware Virtualization Fundamentals", 
                                url: "https://www.vmware.com/topics/glossary/content/virtualization",
                                type: "Tutorial",
                                description: "Introduction to virtualization concepts and benefits"
                            }
                        ]
                    }
                },
                {
                    id: "hypervisor-arch",
                    name: "Hypervisor Architecture",
                    x: 750, y: 150,
                    prerequisites: ["virt-basics"],
                    description: "Type 1 and Type 2 hypervisors, VMM design principles, and performance considerations",
                    resources: {
                        primary: [
                            { 
                                title: "Xen and the Art of Virtualization", 
                                url: "https://www.cl.cam.ac.uk/research/srg/netos/papers/2003-xensosp.pdf",
                                type: "Research Paper",
                                description: "Seminal paper on paravirtualization techniques"
                            },
                            { 
                                title: "VMware ESX Server Architecture", 
                                url: "https://www.vmware.com/pdf/esx_architecture.pdf",
                                type: "Technical Paper",
                                description: "Deep dive into VMware's hypervisor architecture"
                            }
                        ]
                    }
                },
                {
                    id: "cpu-virtualization",
                    name: "CPU Virtualization",
                    x: 550, y: 250,
                    prerequisites: ["hypervisor-arch"],
                    intersections: ["modern-cpu"],
                    description: "Hardware-assisted virtualization, VT-x/AMD-V, and CPU virtualization techniques",
                    resources: {
                        primary: [
                            { 
                                title: "Intel VT-x Technology Overview", 
                                url: "https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html",
                                type: "Technical Guide",
                                description: "Comprehensive guide to Intel's hardware virtualization"
                            },
                            { 
                                title: "AMD-V (SVM) Documentation", 
                                url: "https://www.amd.com/system/files/TechDocs/33047.pdf",
                                type: "Specification",
                                description: "AMD's Secure Virtual Machine technology specification"
                            }
                        ]
                    }
                },
                {
                    id: "memory-virtualization",
                    name: "Memory Virtualization",
                    x: 700, y: 250,
                    prerequisites: ["cpu-virtualization"],
                    intersections: ["memory-systems"],
                    description: "Shadow page tables, EPT/NPT, and memory management in virtualized environments",
                    resources: {
                        primary: [
                            { 
                                title: "Intel EPT (Extended Page Tables)", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html",
                                type: "Technical Guide",
                                description: "Hardware-assisted memory virtualization with EPT"
                            },
                            { 
                                title: "AMD NPT (Nested Page Tables)", 
                                url: "https://developer.amd.com/wordpress/media/2012/10/NPT-WP-1%201-final-TM.pdf",
                                type: "Whitepaper",
                                description: "AMD's approach to hardware memory virtualization"
                            }
                        ]
                    }
                },
                {
                    id: "io-virtualization",
                    name: "I/O Virtualization",
                    x: 850, y: 250,
                    prerequisites: ["memory-virtualization"],
                    description: "Device emulation, paravirtualized drivers, SR-IOV, and IOMMU technologies",
                    resources: {
                        primary: [
                            { 
                                title: "SR-IOV Technology Brief", 
                                url: "https://pcisig.com/single-root-io-virtualization-sr-iov",
                                type: "Technical Brief",
                                description: "Single Root I/O Virtualization specification overview"
                            },
                            { 
                                title: "Intel VT-d (Virtualization Technology for Directed I/O)", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html",
                                type: "Documentation",
                                description: "Hardware-assisted I/O virtualization technology"
                            }
                        ]
                    }
                },
                {
                    id: "hyperv-arch",
                    name: "Hyper-V Architecture",
                    x: 600, y: 350,
                    prerequisites: ["io-virtualization"],
                    description: "Microsoft Hyper-V design, partitions, VSCs/VSPs, and integration with Windows",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Internals - Hyper-V", 
                                url: "https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189",
                                type: "Book",
                                description: "Detailed coverage of Hyper-V in Windows Internals"
                            },
                            { 
                                title: "Hyper-V Architecture Deep Dive", 
                                url: "https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-architecture",
                                type: "Documentation",
                                description: "Official Microsoft Hyper-V architecture guide"
                            }
                        ]
                    }
                },
                {
                    id: "hyperv-enlightenments",
                    name: "Hyper-V Enlightenments",
                    x: 750, y: 350,
                    prerequisites: ["hyperv-arch"],
                    description: "Paravirtualization interfaces, synthetic devices, and performance optimizations",
                    resources: {
                        primary: [
                            { 
                                title: "Hyper-V Top Level Functional Specification", 
                                url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/tlfs",
                                type: "Specification",
                                description: "Complete specification of Hyper-V enlightenments"
                            },
                            { 
                                title: "VMBus Protocol and Architecture", 
                                url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/vmbus/",
                                type: "API Documentation",
                                description: "VMBus communication protocol for synthetic devices"
                            }
                        ]
                    }
                },
                {
                    id: "kernel-integration",
                    name: "Windows Kernel Integration",
                    x: 850, y: 350,
                    prerequisites: ["hyperv-enlightenments"],
                    intersections: ["vbs-arch"],
                    description: "Root partition integration, kernel mode drivers, and Windows hypervisor interface",
                    resources: {
                        primary: [
                            { 
                                title: "Hyper-V Root Partition Architecture", 
                                url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-architecture",
                                type: "Architecture Guide",
                                description: "Windows kernel integration with Hyper-V hypervisor"
                            },
                            { 
                                title: "Windows Driver Model for Virtualization", 
                                url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/kernel/",
                                type: "Developer Guide",
                                description: "Driver development in virtualized Windows environments"
                            }
                        ]
                    }
                },
                {
                    id: "nested-virt-fundamentals",
                    name: "Nested Virtualization Fundamentals",
                    x: 600, y: 450,
                    prerequisites: ["kernel-integration"],
                    description: "Running hypervisors inside VMs, performance implications, and use cases",
                    resources: {
                        primary: [
                            { 
                                title: "The Turtles Project: Design and Implementation of Nested Virtualization", 
                                url: "https://www.usenix.org/system/files/conference/osdi10/osdi10-ben-yehuda.pdf",
                                type: "Research Paper",
                                description: "Academic research on nested virtualization implementation"
                            },
                            { 
                                title: "Intel Nested Virtualization Support", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html",
                                type: "Technical Guide",
                                description: "Hardware support for nested virtualization scenarios"
                            }
                        ]
                    }
                },
                {
                    id: "nested-virt-impl",
                    name: "Nested Virtualization Implementation",
                    x: 750, y: 450,
                    prerequisites: ["nested-virt-fundamentals"],
                    description: "Implementation challenges, shadow VM controls, and performance optimization",
                    resources: {
                        primary: [
                            { 
                                title: "Hyper-V Nested Virtualization", 
                                url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization",
                                type: "Implementation Guide",
                                description: "Microsoft's implementation of nested virtualization"
                            },
                            { 
                                title: "KVM Nested Virtualization", 
                                url: "https://www.linux-kvm.org/page/Nested_Guests",
                                type: "Technical Documentation",
                                description: "Linux KVM approach to nested virtualization"
                            }
                        ]
                    }
                },
                {
                    id: "container-virt",
                    name: "Container Virtualization",
                    x: 850, y: 450,
                    prerequisites: ["nested-virt-impl"],
                    intersections: ["confidential-containers"],
                    isEnd: true,
                    description: "Container technologies, orchestration, and integration with hypervisor-based virtualization",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Container Architecture", 
                                url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/about/",
                                type: "Architecture Guide",
                                description: "Microsoft's approach to Windows containerization"
                            },
                            { 
                                title: "Hyper-V Isolated Containers", 
                                url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/hyperv-container",
                                type: "Technical Guide",
                                description: "Enhanced container isolation using Hyper-V technology"
                            }
                        ]
                    }
                }
            ]
        },
        security: {
            name: "Security Track", 
            color: "#38a169",
            startStation: "security-basics",
            endStation: "confidential-containers",
            stations: [
                {
                    id: "security-basics",
                    name: "Computer Security Basics",
                    x: 1000, y: 150,
                    isStart: true,
                    description: "Foundational security principles, threat models, and defense strategies",
                    resources: {
                        primary: [
                            { 
                                title: "Computer Security: Principles and Practice (4th Edition)", 
                                url: "https://www.amazon.com/Computer-Security-Principles-Practice-4th/dp/0134794109",
                                type: "Textbook",
                                description: "Comprehensive coverage of computer security fundamentals"
                            },
                            { 
                                title: "NIST Cybersecurity Framework", 
                                url: "https://www.nist.gov/cyberframework",
                                type: "Framework",
                                description: "Industry standard cybersecurity risk management framework"
                            }
                        ]
                    }
                },
                {
                    id: "os-security",
                    name: "Operating System Security",
                    x: 1150, y: 150,
                    prerequisites: ["security-basics"],
                    description: "OS security models, access control, privilege separation, and kernel security",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Security Architecture Overview", 
                                url: "https://docs.microsoft.com/en-us/windows/security/",
                                type: "Documentation",
                                description: "Comprehensive guide to Windows security architecture"
                            },
                            { 
                                title: "Linux Security Subsystem", 
                                url: "https://www.kernel.org/doc/html/latest/security/",
                                type: "Kernel Documentation",
                                description: "Linux kernel security mechanisms and frameworks"
                            }
                        ]
                    }
                },
                {
                    id: "tpm",
                    name: "Trusted Platform Module",
                    x: 950, y: 250,
                    prerequisites: ["os-security"],
                    description: "Hardware security module, measured boot, attestation, and key management",
                    resources: {
                        primary: [
                            { 
                                title: "TPM 2.0 Library Specification", 
                                url: "https://trustedcomputinggroup.org/resource/tpm-library-specification/",
                                type: "Specification",
                                description: "Complete TPM 2.0 specification from TCG"
                            },
                            { 
                                title: "Windows TPM Platform Crypto Provider", 
                                url: "https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/",
                                type: "Implementation Guide",
                                description: "Windows integration with TPM for security services"
                            }
                        ]
                    }
                },
                {
                    id: "hw-security",
                    name: "Hardware Security Features",
                    x: 1100, y: 250,
                    prerequisites: ["tpm"],
                    intersections: ["modern-cpu"],
                    description: "CPU security extensions, TXT, TrustZone, and hardware root of trust",
                    resources: {
                        primary: [
                            { 
                                title: "Intel Trusted Execution Technology (TXT)", 
                                url: "https://www.intel.com/content/www/us/en/architecture-and-technology/trusted-execution-technology/",
                                type: "Technology Overview",
                                description: "Intel's hardware-based security technology"
                            },
                            { 
                                title: "ARM TrustZone Architecture", 
                                url: "https://developer.arm.com/ip-products/security-ip/trustzone",
                                type: "Architecture Guide",
                                description: "ARM's system-wide approach to security"
                            }
                        ]
                    }
                },
                {
                    id: "hypervisor-security",
                    name: "Hypervisor Security",
                    x: 1250, y: 250,
                    prerequisites: ["hw-security"],
                    intersections: ["hypervisor-arch"],
                    description: "Hypervisor attack surface, VM isolation, and security boundary enforcement",
                    resources: {
                        primary: [
                            { 
                                title: "A Security Analysis of the Xen Hypervisor", 
                                url: "https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-li.pdf",
                                type: "Security Research",
                                description: "Academic analysis of hypervisor security properties"
                            },
                            { 
                                title: "Breaking the Hypervisor: Fault Injection Attacks", 
                                url: "https://www.blackhat.com/docs/us-17/wednesday/us-17-Mandal-Fractured-Backbone-Breaking-Modern-OS-Defenses-With-Firmware-Attacks.pdf",
                                type: "Security Research",
                                description: "Real-world hypervisor attack techniques and mitigations"
                            }
                        ]
                    }
                },
                {
                    id: "vbs-arch",
                    name: "Virtualization-Based Security",
                    x: 1000, y: 350,
                    prerequisites: ["hypervisor-security"],
                    intersections: ["kernel-integration"],
                    description: "VBS architecture, Virtual Secure Mode, and isolation of security-critical code",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Virtualization-Based Security", 
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/introduction-to-device-guard-virtualization-based-security-and-windows-defender-application-control",
                                type: "Architecture Guide",
                                description: "Microsoft's VBS implementation and security benefits"
                            },
                            { 
                                title: "Hyper-V Code Integrity (HVCI)", 
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/enable-virtualization-based-protection-of-code-integrity",
                                type: "Technical Guide",
                                description: "Kernel code integrity enforcement using hypervisor"
                            }
                        ]
                    }
                },
                {
                    id: "device-guard",
                    name: "Device Guard & Credential Guard",
                    x: 1150, y: 350,
                    prerequisites: ["vbs-arch"],
                    description: "Application control, code integrity policies, and credential protection",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Defender Application Control", 
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/",
                                type: "Feature Guide",
                                description: "Application allowlisting and code integrity policies"
                            },
                            { 
                                title: "Windows Defender Credential Guard", 
                                url: "https://docs.microsoft.com/en-us/windows/security/identity-protection/credential-guard/",
                                type: "Security Feature",
                                description: "Hardware-based credential protection technology"
                            }
                        ]
                    }
                },
                {
                    id: "confidential-computing",
                    name: "Confidential Computing Fundamentals",
                    x: 950, y: 450,
                    prerequisites: ["device-guard"],
                    description: "Protecting data in use, trusted execution environments, and confidential computing principles",
                    resources: {
                        primary: [
                            { 
                                title: "Confidential Computing Consortium - Technical Overview", 
                                url: "https://confidentialcomputing.io/",
                                type: "Industry Initiative",
                                description: "Industry consortium defining confidential computing standards"
                            },
                            { 
                                title: "Introduction to Confidential Computing", 
                                url: "https://confidentialcomputing.io/wp-content/uploads/sites/85/2019/12/CCC_Overview.pdf",
                                type: "Technical Whitepaper",
                                description: "Comprehensive overview of confidential computing concepts"
                            }
                        ]
                    }
                },
                {
                    id: "hardware-tees",
                    name: "Hardware TEEs",
                    x: 1100, y: 450,
                    prerequisites: ["confidential-computing"],
                    intersections: ["ai-hardware"],
                    description: "Intel SGX, AMD SEV, ARM CCA, and hardware-based trusted execution",
                    resources: {
                        primary: [
                            { 
                                title: "Intel Software Guard Extensions (SGX)", 
                                url: "https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions.html",
                                type: "Technology Documentation",
                                description: "Intel's application-level trusted execution environment"
                            },
                            { 
                                title: "AMD Secure Encrypted Virtualization (SEV)", 
                                url: "https://developer.amd.com/sev/",
                                type: "Technology Overview",
                                description: "AMD's VM-level memory encryption technology"
                            }
                        ]
                    }
                },
                {
                    id: "azure-confidential",
                    name: "Azure Confidential Computing",
                    x: 1250, y: 450,
                    prerequisites: ["hardware-tees"],
                    intersections: ["azure-silicon"],
                    description: "Azure confidential VMs, enclave computing, and cloud confidential computing services",
                    resources: {
                        primary: [
                            { 
                                title: "Azure Confidential Computing", 
                                url: "https://azure.microsoft.com/en-us/solutions/confidential-compute/",
                                type: "Service Overview",
                                description: "Microsoft's confidential computing offerings on Azure"
                            },
                            { 
                                title: "Azure Attestation Service", 
                                url: "https://docs.microsoft.com/en-us/azure/attestation/",
                                type: "Service Documentation",
                                description: "Remote attestation service for trusted execution environments"
                            }
                        ]
                    }
                },
                {
                    id: "memory-encryption",
                    name: "Memory Encryption",
                    x: 950, y: 550,
                    prerequisites: ["azure-confidential"],
                    description: "Full memory encryption, SEV-SNP, TME, and memory protection technologies",
                    resources: {
                        primary: [
                            { 
                                title: "AMD SEV-SNP: Strengthening VM Isolation", 
                                url: "https://www.amd.com/system/files/TechDocs/SEV-SNP-strengthening-vm-isolation-with-integrity-protection-and-more.pdf",
                                type: "Technical Whitepaper",
                                description: "Advanced memory protection with integrity and freshness"
                            },
                            { 
                                title: "Intel Total Memory Encryption (TME)", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-total-memory-encryption.html",
                                type: "Technology Brief",
                                description: "Transparent memory encryption at the memory controller"
                            }
                        ]
                    }
                },
                {
                    id: "secure-boot",
                    name: "Secure Boot & Attestation",
                    x: 1100, y: 550,
                    prerequisites: ["memory-encryption"],
                    description: "UEFI Secure Boot, measured boot, remote attestation, and boot integrity",
                    resources: {
                        primary: [
                            { 
                                title: "UEFI Secure Boot in Modern Computer Security", 
                                url: "https://uefi.org/sites/default/files/resources/UEFI_Secure_Boot_in_Modern_Computer_Security_Solutions_2013.pdf",
                                type: "Technical Paper",
                                description: "Role of UEFI Secure Boot in platform security"
                            },
                            { 
                                title: "Remote Attestation Procedures", 
                                url: "https://www.intel.com/content/www/us/en/architecture-and-technology/intel-txt/software-development-guide.html",
                                type: "Developer Guide",
                                description: "Implementing remote attestation with hardware roots of trust"
                            }
                        ]
                    }
                },
                {
                    id: "confidential-containers",
                    name: "Confidential Containers",
                    x: 1250, y: 550,
                    prerequisites: ["secure-boot"],
                    intersections: ["container-virt"],
                    isEnd: true,
                    description: "Container workloads with hardware-based confidentiality and integrity protection",
                    resources: {
                        primary: [
                            { 
                                title: "Confidential Containers Project", 
                                url: "https://github.com/confidential-containers",
                                type: "Open Source Project",
                                description: "Community project for confidential container technologies"
                            },
                            { 
                                title: "Azure Container Instances - Confidential Computing", 
                                url: "https://docs.microsoft.com/en-us/azure/container-instances/",
                                type: "Service Documentation",
                                description: "Azure's confidential container offerings and capabilities"
                            }
                        ]
                    }
                }
            ]
        }
    }
};
