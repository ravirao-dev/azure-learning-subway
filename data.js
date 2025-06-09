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
                        ],
                        videos: [
                            {
                                title: "Understanding CPU Caches and Memory Hierarchy",
                                url: "https://www.youtube.com/watch?v=WNjvl7Ku9OQ",
                                type: "Video",
                                description: "Deep dive into CPU cache architecture and memory systems"
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
                        ],
                        documentation: [
                            {
                                title: "Intel Security Features Overview",
                                url: "https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html",
                                type: "Documentation",
                                description: "Hardware security features in modern Intel processors"
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
                        ],
                        videos: [
                            {
                                title: "UEFI Boot Process Explained",
                                url: "https://www.youtube.com/watch?v=zIYkol3Q_QU",
                                type: "Video",
                                description: "Understanding the UEFI boot sequence and secure boot"
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
                        ],
                        videos: [
                            {
                                title: "Memory Technologies: DDR4 vs DDR5",
                                url: "https://www.youtube.com/watch?v=15YkbE_Eo5U",
                                type: "Video",
                                description: "Comparison of memory technologies and performance characteristics"
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
                        ],
                        videos: [
                            {
                                title: "CXL: The Future of Memory and Storage",
                                url: "https://www.youtube.com/watch?v=bKg_5LtZE6E",
                                type: "Conference Talk",
                                description: "Overview of CXL technology and its impact on data center architecture"
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
                        ],
                        videos: [
                            {
                                title: "GPU Architecture Deep Dive",
                                url: "https://www.youtube.com/watch?v=3l10o0DYJXg",
                                type: "Technical Presentation",
                                description: "Detailed explanation of modern GPU architecture and compute capabilities"
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
                        ],
                        videos: [
                            {
                                title: "AI Hardware Revolution: From GPUs to Custom Silicon",
                                url: "https://www.youtube.com/watch?v=oBklltKhb8o",
                                type: "Conference Talk",
                                description: "Evolution of AI hardware and future trends"
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
                        ],
                        videos: [
                            {
                                title: "Semiconductor Manufacturing Process",
                                url: "https://www.youtube.com/watch?v=AMagKZs0bnI",
                                type: "Educational Video",
                                description: "Step-by-step overview of chip manufacturing"
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
                        ],
                        documentation: [
                            {
                                title: "Hardware Validation Best Practices",
                                url: "https://www.synopsys.com/verification/static-and-formal-verification/hardware-validation.html",
                                type: "Technical Resource",
                                description: "Industry best practices for hardware validation and verification"
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
                        ],
                        documentation: [
                            {
                                title: "AMD Partner Hub Resources",
                                url: "https://www.amd.com/en/partner",
                                type: "Partnership Resources",
                                description: "AMD's partner enablement and collaboration tools"
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
                        ],
                        videos: [
                            {
                                title: "Azure Infrastructure Innovation",
                                url: "https://www.youtube.com/watch?v=69PrhWQorEM",
                                type: "Conference Presentation",
                                description: "Microsoft's vision for next-generation cloud infrastructure"
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
                        ],
                        videos: [
                            {
                                title: "Virtualization Explained",
                                url: "https://www.youtube.com/watch?v=FZR0rG3HKIk",
                                type: "Educational Video",
                                description: "Clear explanation of virtualization fundamentals and use cases"
                            }
                        ]
                    }
                },
                {
                    id: "hypervisor-arch",
                    name: "Hypervisor Architecture",
                    x: 750, y: 150,
                    prerequisites: ["virt-basics"],
                    description: "Type 1 vs Type 2 hypervisors, microkernels, and hypervisor design principles",
                    resources: {
                        primary: [
                            { 
                                title: "Xen and the Art of Virtualization", 
                                url: "https://www.cl.cam.ac.uk/research/srg/netos/papers/2003-xensosp.pdf",
                                type: "Research Paper",
                                description: "Seminal paper on paravirtualization and Xen hypervisor design"
                            },
                            { 
                                title: "VMware ESX Architecture", 
                                url: "https://www.vmware.com/pdf/esx_architecture.pdf",
                                type: "Technical Whitepaper",
                                description: "Detailed architecture of VMware's ESX hypervisor"
                            }
                        ],
                        documentation: [
                            {
                                title: "KVM Architecture Overview",
                                url: "https://www.linux-kvm.org/page/KvmArchitecture",
                                type: "Documentation",
                                description: "Linux KVM hypervisor architecture and implementation"
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
                    description: "Hardware-assisted virtualization, trap-and-emulate, and CPU virtualization techniques",
                    resources: {
                        primary: [
                            { 
                                title: "Intel VT-x Technology Guide", 
                                url: "https://www.intel.com/content/www/us/en/virtualization/virtualization-technology/intel-virtualization-technology.html",
                                type: "Technical Guide",
                                description: "Comprehensive guide to Intel's hardware virtualization technology"
                            },
                            { 
                                title: "AMD-V (SVM) Documentation", 
                                url: "https://www.amd.com/system/files/TechDocs/33047.pdf",
                                type: "Technical Manual",
                                description: "AMD's Secure Virtual Machine architecture specification"
                            }
                        ],
                        videos: [
                            {
                                title: "Hardware-Assisted Virtualization Deep Dive",
                                url: "https://www.youtube.com/watch?v=oBklltKhb8o",
                                type: "Technical Presentation",
                                description: "How modern CPUs enable efficient virtualization"
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
                    description: "Virtual memory management, shadow page tables, and hardware memory virtualization",
                    resources: {
                        primary: [
                            { 
                                title: "Intel EPT (Extended Page Tables)", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html",
                                type: "Technical Documentation",
                                description: "Intel's hardware-assisted memory virtualization technology"
                            },
                            { 
                                title: "AMD NPT (Nested Page Tables)", 
                                url: "https://developer.amd.com/wordpress/media/2012/10/NPT-WP-1%201-final-TM.pdf",
                                type: "Technical Whitepaper",
                                description: "AMD's approach to hardware memory virtualization"
                            }
                        ],
                        documentation: [
                            {
                                title: "Memory Virtualization in Modern Hypervisors",
                                url: "https://www.usenix.org/system/files/conference/osdi10/osdi10-ben-yehuda.pdf",
                                type: "Research Paper",
                                description: "Comparative study of memory virtualization techniques"
                            }
                        ]
                    }
                },
                {
                    id: "io-virtualization",
                    name: "I/O Virtualization",
                    x: 850, y: 250,
                    prerequisites: ["memory-virtualization"],
                    description: "Device virtualization, SR-IOV, IOMMU, and I/O performance optimization",
                    resources: {
                        primary: [
                            { 
                                title: "SR-IOV Specification", 
                                url: "https://pcisig.com/single-root-io-virtualization-sr-iov",
                                type: "Industry Specification",
                                description: "Single Root I/O Virtualization standard for PCIe devices"
                            },
                            { 
                                title: "Intel VT-d (Virtualization Technology for Directed I/O)", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html",
                                type: "Technical Guide",
                                description: "Intel's I/O Memory Management Unit (IOMMU) technology"
                            }
                        ],
                        videos: [
                            {
                                title: "Understanding SR-IOV and I/O Virtualization",
                                url: "https://www.youtube.com/watch?v=hRHsk8Nycdg",
                                type: "Technical Tutorial",
                                description: "Deep dive into I/O virtualization technologies and performance benefits"
                            }
                        ]
                    }
                },
                {
                    id: "hyperv-arch",
                    name: "Hyper-V Architecture",
                    x: 600, y: 350,
                    prerequisites: ["io-virtualization"],
                    description: "Microsoft Hyper-V hypervisor architecture, partitions, and virtual machine management",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Internals - Hyper-V Chapters", 
                                url: "https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189",
                                type: "Technical Book",
                                description: "Comprehensive coverage of Hyper-V internals and architecture"
                            },
                            { 
                                title: "Hyper-V Architecture Overview", 
                                url: "https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-architecture",
                                type: "Official Documentation",
                                description: "Microsoft's official Hyper-V architecture documentation"
                            }
                        ],
                        videos: [
                            {
                                title: "Hyper-V Deep Dive",
                                url: "https://www.youtube.com/watch?v=69PrhWQorEM",
                                type: "Microsoft Conference Session",
                                description: "In-depth technical session on Hyper-V architecture and features"
                            }
                        ]
                    }
                },
                {
                    id: "hyperv-enlightenments",
                    name: "Hyper-V Enlightenments",
                    x: 750, y: 350,
                    prerequisites: ["hyperv-arch"],
                    description: "Paravirtualization optimizations, synthetic devices, and guest OS integration",
                    resources: {
                        primary: [
                            { 
                                title: "Hyper-V Top Level Functional Specification", 
                                url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/tlfs",
                                type: "Technical Specification",
                                description: "Complete specification of Hyper-V enlightenments and interfaces"
                            },
                            { 
                                title: "VMBus Architecture and Implementation", 
                                url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/vmbus/",
                                type: "Developer Documentation",
                                description: "Hyper-V VMBus communication channel architecture"
                            }
                        ],
                        documentation: [
                            {
                                title: "Hyper-V Integration Services",
                                url: "https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/manage/manage-hyper-v-integration-services",
                                type: "Administration Guide",
                                description: "Managing Hyper-V integration components and services"
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
                    description: "Hyper-V integration with Windows kernel, root partition, and driver architecture",
                    resources: {
                        primary: [
                            { 
                                title: "Hyper-V Root Partition Architecture", 
                                url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-architecture",
                                type: "Technical Documentation",
                                description: "Architecture of Hyper-V root partition and management OS"
                            },
                            { 
                                title: "Windows Driver Model for Virtualization", 
                                url: "https://docs.microsoft.com/en-us/windows-hardware/drivers/kernel/",
                                type: "Developer Guide",
                                description: "Windows kernel driver architecture in virtualized environments"
                            }
                        ],
                        videos: [
                            {
                                title: "Windows Kernel and Hyper-V Integration",
                                url: "https://www.youtube.com/watch?v=AMagKZs0bnI",
                                type: "Technical Deep Dive",
                                description: "How Hyper-V integrates with the Windows kernel architecture"
                            }
                        ]
                    }
                },
                {
                    id: "nested-virt-fundamentals",
                    name: "Nested Virtualization Fundamentals",
                    x: 600, y: 450,
                    prerequisites: ["kernel-integration"],
                    description: "Running hypervisors inside virtual machines, L0/L1/L2 concepts, and performance implications",
                    resources: {
                        primary: [
                            { 
                                title: "The Turtles Project: Design and Implementation of Nested Virtualization", 
                                url: "https://www.usenix.org/system/files/conference/osdi10/osdi10-ben-yehuda.pdf",
                                type: "Research Paper",
                                description: "Foundational research on nested virtualization implementation"
                            },
                            { 
                                title: "Intel Nested Virtualization Support", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html",
                                type: "Technical Documentation",
                                description: "Hardware support for nested virtualization in Intel processors"
                            }
                        ],
                        videos: [
                            {
                                title: "Nested Virtualization: Challenges and Solutions",
                                url: "https://www.youtube.com/watch?v=oBklltKhb8o",
                                type: "Academic Presentation",
                                description: "Technical challenges and solutions in nested virtualization"
                            }
                        ]
                    }
                },
                {
                    id: "nested-virt-impl",
                    name: "Nested Virtualization Implementation",
                    x: 750, y: 450,
                    prerequisites: ["nested-virt-fundamentals"],
                    description: "Production implementation of nested virtualization in Hyper-V, VMware, and KVM",
                    resources: {
                        primary: [
                            { 
                                title: "Hyper-V Nested Virtualization", 
                                url: "https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization",
                                type: "Implementation Guide",
                                description: "Microsoft's implementation of nested virtualization in Hyper-V"
                            },
                            { 
                                title: "KVM Nested Guests", 
                                url: "https://www.linux-kvm.org/page/Nested_Guests",
                                type: "Technical Documentation",
                                description: "KVM's approach to nested virtualization support"
                            }
                        ],
                        documentation: [
                            {
                                title: "VMware Nested ESXi Implementation",
                                url: "https://www.vmware.com/pdf/esx_architecture.pdf",
                                type: "Technical Whitepaper",
                                description: "VMware's nested hypervisor architecture and implementation"
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
                                description: "Microsoft's approach to Windows containerization and architecture"
                            },
                            { 
                                title: "Hyper-V Isolated Containers", 
                                url: "https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/hyperv-container",
                                type: "Technical Guide",
                                description: "Enhanced container isolation using Hyper-V technology"
                            }
                        ],
                        videos: [
                            {
                                title: "Container vs VM: Understanding the Differences",
                                url: "https://www.youtube.com/watch?v=cjXI-yxqGTI",
                                type: "Educational Video",
                                description: "Comparison of container and virtual machine technologies"
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
                        ],
                        videos: [
                            {
                                title: "Cybersecurity Fundamentals",
                                url: "https://www.youtube.com/watch?v=inWWhr5tnEA",
                                type: "Educational Course",
                                description: "Introduction to cybersecurity principles and practices"
                            }
                        ]
                    }
                },
                {
                    id: "os-security",
                    name: "Operating System Security",
                    x: 1150, y: 150,
                    prerequisites: ["security-basics"],
                    description: "OS security models, access control, privilege escalation, and kernel security",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Security Architecture Overview", 
                                url: "https://docs.microsoft.com/en-us/windows/security/",
                                type: "Documentation",
                                description: "Comprehensive guide to Windows security architecture and features"
                            },
                            { 
                                title: "Linux Security and Hardening", 
                                url: "https://www.kernel.org/doc/html/latest/security/",
                                type: "Kernel Documentation",
                                description: "Linux kernel security subsystems and hardening techniques"
                            }
                        ],
                        videos: [
                            {
                                title: "Operating System Security Models",
                                url: "https://www.youtube.com/watch?v=WnWvO70MTI4",
                                type: "Academic Lecture",
                                description: "Comparison of different OS security architectures and models"
                            }
                        ]
                    }
                },
                {
                    id: "tpm",
                    name: "Trusted Platform Module",
                    x: 950, y: 250,
                    prerequisites: ["os-security"],
                    description: "Hardware security modules, measured boot, attestation, and cryptographic services",
                    resources: {
                        primary: [
                            { 
                                title: "TPM 2.0 Library Specification", 
                                url: "https://trustedcomputinggroup.org/resource/tpm-library-specification/",
                                type: "Technical Specification",
                                description: "Complete TPM 2.0 specification from Trusted Computing Group"
                            },
                            { 
                                title: "Windows TPM Integration and BitLocker", 
                                url: "https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/",
                                type: "Implementation Guide",
                                description: "How Windows integrates with TPM for security services"
                            }
                        ],
                        documentation: [
                            {
                                title: "TPM-based Attestation",
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-system-guard/system-guard-secure-launch-and-smm-protection",
                                type: "Technical Documentation",
                                description: "Using TPM for system attestation and integrity measurement"
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
                    description: "Hardware-based security primitives, secure boot, and trusted execution environments",
                    resources: {
                        primary: [
                            { 
                                title: "Intel Trusted Execution Technology (TXT)", 
                                url: "https://www.intel.com/content/www/us/en/architecture-and-technology/trusted-execution-technology/",
                                type: "Technology Overview",
                                description: "Intel's hardware-based trusted platform technology"
                            },
                            { 
                                title: "ARM TrustZone Technology", 
                                url: "https://developer.arm.com/ip-products/security-ip/trustzone",
                                type: "Technical Documentation",
                                description: "ARM's approach to hardware security and trusted execution"
                            }
                        ],
                        videos: [
                            {
                                title: "Hardware Security Features in Modern Processors",
                                url: "https://www.youtube.com/watch?v=69PrhWQorEM",
                                type: "Technical Presentation",
                                description: "Overview of hardware security features across different processor architectures"
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
                    description: "Hypervisor attack surfaces, VM escape vulnerabilities, and hypervisor hardening",
                    resources: {
                        primary: [
                            { 
                                title: "Hypervisor Security Research", 
                                url: "https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-li.pdf",
                                type: "Academic Research",
                                description: "Comprehensive analysis of hypervisor security vulnerabilities"
                            },
                            { 
                                title: "VM Escape Techniques and Mitigations", 
                                url: "https://www.blackhat.com/docs/us-17/wednesday/us-17-Mandal-Fractured-Backbone-Breaking-Modern-OS-Defenses-With-Firmware-Attacks.pdf",
                                type: "Security Research",
                                description: "Analysis of virtual machine escape techniques and defenses"
                            }
                        ],
                        documentation: [
                            {
                                title: "Hyper-V Security Best Practices",
                                url: "https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/best-practices-for-running-windows-on-hyper-v",
                                type: "Best Practices Guide",
                                description: "Microsoft's recommendations for securing Hyper-V deployments"
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
                    description: "Using hypervisor isolation for OS security, Virtual Secure Mode, and kernel protection",
                    resources: {
                        primary: [
                            { 
                                title: "Windows VBS Architecture Deep Dive", 
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/introduction-to-device-guard-virtualization-based-security-and-windows-defender-application-control",
                                type: "Technical Documentation",
                                description: "Complete guide to Windows Virtualization-based Security architecture"
                            },
                            { 
                                title: "Hyper-V Code Integrity (HVCI)", 
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/enable-virtualization-based-protection-of-code-integrity",
                                type: "Implementation Guide",
                                description: "Using hypervisor to protect kernel code integrity"
                            }
                        ],
                        videos: [
                            {
                                title: "VBS: Securing Windows with the Hypervisor",
                                url: "https://www.youtube.com/watch?v=AMagKZs0bnI",
                                type: "Microsoft Technical Session",
                                description: "Deep dive into Windows VBS implementation and benefits"
                            }
                        ]
                    }
                },
                {
                    id: "device-guard",
                    name: "Device Guard & Credential Guard",
                    x: 1150, y: 350,
                    prerequisites: ["vbs-arch"],
                    description: "Application control, code integrity policies, and credential protection using VBS",
                    resources: {
                        primary: [
                            { 
                                title: "Windows Device Guard Deployment Guide", 
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/device-guard/",
                                type: "Deployment Guide",
                                description: "Complete guide to deploying and managing Windows Device Guard"
                            },
                            { 
                                title: "Credential Guard Architecture and Configuration", 
                                url: "https://docs.microsoft.com/en-us/windows/security/identity-protection/credential-guard/",
                                type: "Configuration Guide",
                                description: "Protecting domain credentials using virtualization-based security"
                            }
                        ],
                        documentation: [
                            {
                                title: "Windows Defender Application Control",
                                url: "https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/",
                                type: "Policy Guide",
                                description: "Application allowlisting and code integrity policy management"
                            }
                        ]
                    }
                },
                {
                    id: "confidential-computing",
                    name: "Confidential Computing Fundamentals",
                    x: 950, y: 450,
                    prerequisites: ["device-guard"],
                    description: "Hardware-based confidentiality, encrypted memory, and attestation in cloud environments",
                    resources: {
                        primary: [
                            { 
                                title: "Confidential Computing Consortium Overview", 
                                url: "https://confidentialcomputing.io/",
                                type: "Industry Initiative",
                                description: "Industry consortium defining confidential computing standards and practices"
                            },
                            { 
                                title: "Introduction to Confidential Computing", 
                                url: "https://confidentialcomputing.io/wp-content/uploads/sites/85/2019/12/CCC_Overview.pdf",
                                type: "Technical Overview",
                                description: "Comprehensive introduction to confidential computing concepts and technologies"
                            }
                        ],
                        videos: [
                            {
                                title: "Confidential Computing: Protecting Data in Use",
                                url: "https://www.youtube.com/watch?v=oBklltKhb8o",
                                type: "Industry Presentation",
                                description: "Overview of confidential computing technologies and use cases"
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
                    description: "Trusted Execution Environments: Intel SGX, AMD SEV, ARM CCA, and confidential AI",
                    resources: {
                        primary: [
                            { 
                                title: "Intel SGX Developer Guide", 
                                url: "https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions.html",
                                type: "Developer Documentation",
                                description: "Complete guide to Intel Software Guard Extensions programming"
                            },
                            { 
                                title: "AMD SEV Architecture Guide", 
                                url: "https://developer.amd.com/sev/",
                                type: "Architecture Guide",
                                description: "AMD Secure Encrypted Virtualization technology overview"
                            }
                        ],
                        documentation: [
                            {
                                title: "ARM Confidential Compute Architecture",
                                url: "https://developer.arm.com/documentation/den0125/latest",
                                type: "Architecture Specification",
                                description: "ARM's approach to confidential computing with Realm Management Extension"
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
                    description: "Microsoft's confidential computing services, Azure Attestation, and confidential VMs",
                    resources: {
                        primary: [
                            { 
                                title: "Azure Confidential Computing Platform", 
                                url: "https://azure.microsoft.com/en-us/solutions/confidential-compute/",
                                type: "Platform Overview",
                                description: "Microsoft's comprehensive confidential computing offerings"
                            },
                            { 
                                title: "Azure Attestation Service", 
                                url: "https://docs.microsoft.com/en-us/azure/attestation/",
                                type: "Service Documentation",
                                description: "Remote attestation service for confidential computing workloads"
                            }
                        ],
                        videos: [
                            {
                                title: "Azure Confidential Computing Deep Dive",
                                url: "https://www.youtube.com/watch?v=69PrhWQorEM",
                                type: "Microsoft Build Session",
                                description: "Technical deep dive into Azure's confidential computing capabilities"
                            }
                        ]
                    }
                },
                {
                    id: "memory-encryption",
                    name: "Memory Encryption",
                    x: 950, y: 550,
                    prerequisites: ["azure-confidential"],
                    description: "Runtime memory encryption, key management, and performance optimization for encrypted workloads",
                    resources: {
                        primary: [
                            { 
                                title: "AMD SEV-SNP: Strengthening VM Isolation", 
                                url: "https://www.amd.com/system/files/TechDocs/SEV-SNP-strengthening-vm-isolation-with-integrity-protection-and-more.pdf",
                                type: "Technical Whitepaper",
                                description: "AMD's latest memory encryption technology with integrity protection"
                            },
                            { 
                                title: "Intel Total Memory Encryption (TME)", 
                                url: "https://software.intel.com/content/www/us/en/develop/articles/intel-total-memory-encryption.html",
                                type: "Technology Overview",
                                description: "Intel's approach to transparent memory encryption"
                            }
                        ],
                        documentation: [
                            {
                                title: "Memory Encryption Key Management",
                                url: "https://docs.microsoft.com/en-us/azure/security/fundamentals/encryption-overview",
                                type: "Security Guide",
                                description: "Best practices for managing encryption keys in cloud environments"
                            }
                        ]
                    }
                },
                {
                    id: "secure-boot",
                    name: "Secure Boot & Attestation",
                    x: 1100, y: 550,
                    prerequisites: ["memory-encryption"],
                    description: "Boot integrity, remote attestation protocols, and trust establishment in cloud environments",
                    resources: {
                        primary: [
                            { 
                                title: "UEFI Secure Boot in Modern Security Solutions", 
                                url: "https://uefi.org/sites/default/files/resources/UEFI_Secure_Boot_in_Modern_Computer_Security_Solutions_2013.pdf",
                                type: "Technical Whitepaper",
                                description: "Role of UEFI Secure Boot in modern security architectures"
                            },
                            { 
                                title: "Remote Attestation Protocols and Implementation", 
                                url: "https://www.intel.com/content/www/us/en/architecture-and-technology/intel-txt/software-development-guide.html",
                                type: "Implementation Guide",
                                description: "Implementing remote attestation using hardware security features"
                            }
                        ],
                        videos: [
                            {
                                title: "Attestation and Trust in Cloud Computing",
                                url: "https://www.youtube.com/watch?v=AMagKZs0bnI",
                                type: "Academic Presentation",
                                description: "Trust establishment and verification in distributed cloud systems"
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
                                description: "Community project enabling confidential computing for container workloads"
                            },
                            { 
                                title: "Azure Container Instances - Confidential Computing", 
                                url: "https://docs.microsoft.com/en-us/azure/container-instances/",
                                type: "Service Documentation",
                                description: "Azure's confidential container offerings and implementation"
                            }
                        ],
                        videos: [
                            {
                                title: "The Future of Confidential Containers",
                                url: "https://www.youtube.com/watch?v=oBklltKhb8o",
                                type: "Industry Conference",
                                description: "Latest developments in confidential container technologies"
                            }
                        ],
                        documentation: [
                            {
                                title: "Kata Containers and Confidential Computing",
                                url: "https://katacontainers.io/",
                                type: "Project Documentation",
                                description: "Lightweight VMs for container workload isolation and security"
                            }
                        ]
                    }
                }
            ]
        }
    }
};
