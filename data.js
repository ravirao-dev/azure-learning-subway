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
                // ... Continue with all other virtualization stations following the same pattern
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
                                type: "Documentation",
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
                // ... Continue with all other security stations
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
```
