db.auth("strapi", "strapi");

db = db.getSiblingDB("strapi");

db.strapi_administrator.insertOne({
	username: "admin",
	password: "$2a$10$NmYh/1m85fZa3W/x.wjlVOqDCGdv3DczJCm8lgdvRwMxKu5ajmBP2",
	email: "admin@igniumdigital.com",
});

db.upload_file.insertOne({
	_id: ObjectId("5ee93b123a1fb1000c1bab65"),
	name: "architecture-1868667_1920",
	alternativeText: "",
	caption: "",
	hash: "architecture_1868667_1920_3ec252a197",
	ext: ".jpeg",
	mime: "image/jpeg",
	size: 484.21,
	width: 1920,
	height: 1280,
	url: "/uploads/architecture_1868667_1920_3ec252a197.jpeg",
	formats: {
		thumbnail: {
			hash: "thumbnail_architecture_1868667_1920_3ec252a197",
			ext: ".jpeg",
			mime: "image/jpeg",
			width: 234,
			height: 156,
			size: 9.14,
			path: null,
			url:
				"/uploads/thumbnail_architecture_1868667_1920_3ec252a197.jpeg",
		},
		large: {
			hash: "large_architecture_1868667_1920_3ec252a197",
			ext: ".jpeg",
			mime: "image/jpeg",
			width: 1000,
			height: 667,
			size: 148.91,
			path: null,
			url: "/uploads/large_architecture_1868667_1920_3ec252a197.jpeg",
		},
		medium: {
			hash: "medium_architecture_1868667_1920_3ec252a197",
			ext: ".jpeg",
			mime: "image/jpeg",
			width: 750,
			height: 500,
			size: 85.18,
			path: null,
			url: "/uploads/medium_architecture_1868667_1920_3ec252a197.jpeg",
		},
		small: {
			hash: "small_architecture_1868667_1920_3ec252a197",
			ext: ".jpeg",
			mime: "image/jpeg",
			width: 500,
			height: 333,
			size: 39.86,
			path: null,
			url: "/uploads/small_architecture_1868667_1920_3ec252a197.jpeg",
		},
	},
	provider: "local",
	related: [],
	createdAt: ISODate("2020-06-16T21:35:14.931Z"),
	updatedAt: ISODate("2020-06-16T21:35:14.931Z"),
	__v: 0,
});

db.articles.insertMany([
	{
		category: "technology",
		title: "venenatis urna cursus eget nunc",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-02-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "technology",
		title: "venenatis urna cursus eget nunc",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "technology",
		title: "venenatis urna cursus eget nunc",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "technology",
		title: "venenatis urna cursus eget nunc",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "technology",
		title: "venenatis urna cursus eget nunc",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "motivation",
		title: "quis commodo odio aenean sed",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "motivation",
		title: "quis commodo odio aenean sed",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "motivation",
		title: "quis commodo odio aenean sed",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "motivation",
		title: "quis commodo odio aenean sed",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "motivation",
		title: "quis commodo odio aenean sed",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-03-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-04-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "technology",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "motivation",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "technology",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-05-01",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "motivation",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-05-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "technology",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2019-06-20",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: true,
	},
	{
		category: "motivation",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "technology",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "motivation",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "technology",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "motivation",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "business",
		title: "eget mauris pharetra et ultrices",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-05-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "technology",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-06-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
	{
		category: "motivation",
		title: "ornare lectus sit amet est placerat in egestas",
		content:
			"# Life advice looking through a window" +
			"\n\nWith an operating system installed onto a computer’s hard drive, users no longer need to boot a computer with a floppy disk, nor do they need to run programs from a floppy disk. All the drivers of a program are stored onto the computer and used whenever a program is started." +
			"\n\n# Select the right technologies" +
			"\n\nApple’s Macintosh computer was among the first of a couple systems to establish a user-to-hardware relationship through a user-friendly interface. Today, we have quite a few operating systems. Some of the more popular ones are Windows Vista, Mac OS X, ZETA, IBM, Unix, and Linux. But even still, operating systems have extended onto to non-computer devices such as game consoles, portable music players, and PDAs. Regardless of the device, the operating system installed onto it serves the same purpose across the board: to enable user-to-hardware communication." +
			"\n\nWhen you think about upgrading your computer to a new operating system, be careful to make sure that you have the necessary hardware components. We tried to upgrade one of our Windows 98 machines to Windows XP, but we were cautioned that the former may not be hardware compatible with XP technology.",
		date: "2020-01-23",
		coverPhoto: [ObjectId("5ee93b123a1fb1000c1bab65")],
		featured: false,
	},
]);

db.careers.insertOne({
	title: "Senior Sitecore Developer",
	location: "Portland, OR",
	description:
		"This position is considered a multi-faceted leadership opportunity to support both internal and vendor support teams. This position is considered a multi-faceted lider." +
		"We’re looking for people to join the team who are as We’re looking for people to join consequat nisl vel pretium lectus",
	link: "https://www.linkedin.com",
});
