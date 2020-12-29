import retrieve from "../api/accounts";
import { server } from "../accounts";

describe("Accounts", () => {
	it("should return unfiltered results", (done) => {
		var expected = {
			accounts: ["25122540", "67910578", "20239427", "91721163", "55898217"],
			netAccounts: [
				{
					account: "25122540",
					accountName: "32552392",
					routingNumber: "731830633",
					transactions: [
						{ transactionType: "withdrawal", amount: 125.05 },
						{ transactionType: "withdrawal", amount: 741.16 },
						{ transactionType: "withdrawal", amount: 983.55 },
						{ transactionType: "withdrawal", amount: 159.95 },
						{ transactionType: "deposit", amount: 443.22 }
					],
					netDeposits: -1566.49
				},
				{
					account: "67910578",
					accountName: "35402076",
					routingNumber: "755515031",
					transactions: [
						{ transactionType: "withdrawal", amount: 753.48 },
						{ transactionType: "deposit", amount: 568.7 },
						{ transactionType: "deposit", amount: 99.37 },
						{ transactionType: "deposit", amount: 916.78 },
						{ transactionType: "withdrawal", amount: 27.55 }
					],
					netDeposits: 803.82
				},
				{
					account: "20239427",
					accountName: "25240174",
					routingNumber: "864498434",
					transactions: [
						{ transactionType: "withdrawal", amount: 140.16 },
						{ transactionType: "withdrawal", amount: 635.6 },
						{ transactionType: "withdrawal", amount: 290.82 },
						{ transactionType: "withdrawal", amount: 196.41 },
						{ transactionType: "deposit", amount: 264.94 }
					],
					netDeposits: -998.05
				},
				{
					account: "91721163",
					accountName: "33727016",
					routingNumber: "981992237",
					transactions: [
						{ transactionType: "withdrawal", amount: 81.95 },
						{ transactionType: "withdrawal", amount: 841.28 },
						{ transactionType: "withdrawal", amount: 166.22 },
						{ transactionType: "deposit", amount: 463.58 },
						{ transactionType: "withdrawal", amount: 194.36 }
					],
					netDeposits: -820.23
				},
				{
					account: "55898217",
					accountName: "81299920",
					routingNumber: "794371223",
					transactions: [
						{ transactionType: "withdrawal", amount: 822.58 },
						{ transactionType: "deposit", amount: 55.38 },
						{ transactionType: "deposit", amount: 697.98 },
						{ transactionType: "deposit", amount: 430.42 },
						{ transactionType: "withdrawal", amount: 220.46 }
					],
					netDeposits: 140.74
				}
			],
			nextPage: 2,
			previousPage: null
		};
		retrieve()
			.then((output) => {
				expect(output).toEqual(expected);
			})
			.then(done);
	});

	describe("should return results for", () => {
		it("first page", (done) => {
			var expected = {
				accounts: ["25122540", "67910578", "20239427", "91721163", "55898217"],
				netAccounts: [
					{
						account: "25122540",
						accountName: "32552392",
						routingNumber: "731830633",
						transactions: [
							{ transactionType: "withdrawal", amount: 125.05 },
							{ transactionType: "withdrawal", amount: 741.16 },
							{ transactionType: "withdrawal", amount: 983.55 },
							{ transactionType: "withdrawal", amount: 159.95 },
							{ transactionType: "deposit", amount: 443.22 }
						],
						netDeposits: -1566.49
					},
					{
						account: "67910578",
						accountName: "35402076",
						routingNumber: "755515031",
						transactions: [
							{ transactionType: "withdrawal", amount: 753.48 },
							{ transactionType: "deposit", amount: 568.7 },
							{ transactionType: "deposit", amount: 99.37 },
							{ transactionType: "deposit", amount: 916.78 },
							{ transactionType: "withdrawal", amount: 27.55 }
						],
						netDeposits: 803.82
					},
					{
						account: "20239427",
						accountName: "25240174",
						routingNumber: "864498434",
						transactions: [
							{ transactionType: "withdrawal", amount: 140.16 },
							{ transactionType: "withdrawal", amount: 635.6 },
							{ transactionType: "withdrawal", amount: 290.82 },
							{ transactionType: "withdrawal", amount: 196.41 },
							{ transactionType: "deposit", amount: 264.94 }
						],
						netDeposits: -998.05
					},
					{
						account: "91721163",
						accountName: "33727016",
						routingNumber: "981992237",
						transactions: [
							{ transactionType: "withdrawal", amount: 81.95 },
							{ transactionType: "withdrawal", amount: 841.28 },
							{ transactionType: "withdrawal", amount: 166.22 },
							{ transactionType: "deposit", amount: 463.58 },
							{ transactionType: "withdrawal", amount: 194.36 }
						],
						netDeposits: -820.23
					},
					{
						account: "55898217",
						accountName: "81299920",
						routingNumber: "794371223",
						transactions: [
							{ transactionType: "withdrawal", amount: 822.58 },
							{ transactionType: "deposit", amount: 55.38 },
							{ transactionType: "deposit", amount: 697.98 },
							{ transactionType: "deposit", amount: 430.42 },
							{ transactionType: "withdrawal", amount: 220.46 }
						],
						netDeposits: 140.74
					}
				],
				nextPage: 2,
				previousPage: null
			};
			retrieve({ page: 1 })
				.then((output) => {
					expect(output).toEqual(expected);
				})
				.then(done);
		});

		it("second page", (done) => {
			var expected = {
				accounts: ["60052546", "77566520", "58407767", "10506122", "97300336"],
				netAccounts: [
					{
						account: "60052546",
						accountName: "56232115",
						routingNumber: "555695737",
						transactions: [
							{ transactionType: "deposit", amount: 373.71 },
							{ transactionType: "withdrawal", amount: 383.55 },
							{ transactionType: "withdrawal", amount: 256.82 },
							{ transactionType: "withdrawal", amount: 547.9 },
							{ transactionType: "deposit", amount: 797.78 }
						],
						netDeposits: -16.78
					},
					{
						account: "77566520",
						accountName: "96139462",
						routingNumber: "716204815",
						transactions: [
							{ transactionType: "deposit", amount: 962.06 },
							{ transactionType: "deposit", amount: 134.85 },
							{ transactionType: "deposit", amount: 386.13 },
							{ transactionType: "withdrawal", amount: 554.14 },
							{ transactionType: "withdrawal", amount: 163.74 }
						],
						netDeposits: 765.16
					},
					{
						account: "58407767",
						accountName: "90478310",
						routingNumber: "731179213",
						transactions: [
							{ transactionType: "deposit", amount: 57.52 },
							{ transactionType: "withdrawal", amount: 997.24 },
							{ transactionType: "withdrawal", amount: 451.31 },
							{ transactionType: "withdrawal", amount: 702.79 },
							{ transactionType: "deposit", amount: 117.19 }
						],
						netDeposits: -1976.63
					},
					{
						account: "10506122",
						accountName: "24414689",
						routingNumber: "150889197",
						transactions: [
							{ transactionType: "deposit", amount: 733.97 },
							{ transactionType: "withdrawal", amount: 730.92 },
							{ transactionType: "deposit", amount: 234.61 },
							{ transactionType: "deposit", amount: 86.14 },
							{ transactionType: "deposit", amount: 735.39 }
						],
						netDeposits: 1059.19
					},
					{
						account: "97300336",
						accountName: "32729522",
						routingNumber: "740971130",
						transactions: [
							{ transactionType: "withdrawal", amount: 696.87 },
							{ transactionType: "withdrawal", amount: 934.92 },
							{ transactionType: "withdrawal", amount: 394.8 },
							{ transactionType: "deposit", amount: 44.12 },
							{ transactionType: "withdrawal", amount: 802.56 }
						],
						netDeposits: -2785.03
					}
				],
				nextPage: 3,
				previousPage: 1
			};
			retrieve({ page: 2 })
				.then((output) => {
					expect(output).toEqual(expected);
				})
				.then(done);
		});

		it("should call console.log on error", (done) => {
			spyOn(console, "log");

			retrieve({ page: -5 })
				.then(() => {
					expect(console.log).toHaveBeenCalled();
				})
				.then(done);
		});
	});

	it("last page", (done) => {
		var expected = {
			accounts: ["13703991", "97691691", "61093265"],
			netAccounts: [
				{
					account: "13703991",
					accountName: "55408825",
					routingNumber: "229884450",
					transactions: [
						{ transactionType: "deposit", amount: 108.65 },
						{ transactionType: "deposit", amount: 576.52 },
						{ transactionType: "deposit", amount: 474.31 },
						{ transactionType: "withdrawal", amount: 466.16 },
						{ transactionType: "deposit", amount: 827.87 }
					],
					netDeposits: 1521.19
				},
				{
					account: "97691691",
					accountName: "97356057",
					routingNumber: "120838259",
					transactions: [
						{ transactionType: "deposit", amount: 278.34 },
						{ transactionType: "withdrawal", amount: 866.91 },
						{ transactionType: "deposit", amount: 791.52 },
						{ transactionType: "withdrawal", amount: 80.76 },
						{ transactionType: "withdrawal", amount: 922.47 }
					],
					netDeposits: -800.28
				},
				{
					account: "61093265",
					accountName: "57061536",
					routingNumber: "365385185",
					transactions: [
						{ transactionType: "withdrawal", amount: 971.09 },
						{ transactionType: "deposit", amount: 543.79 },
						{ transactionType: "deposit", amount: 704.69 },
						{ transactionType: "deposit", amount: 336.52 },
						{ transactionType: "withdrawal", amount: 353.9 }
					],
					netDeposits: 260.01
				}
			],
			nextPage: null,
			previousPage: 4
		};

		retrieve({ page: 5 })
			.then((output) => {
				expect(output).toEqual(expected);
			})
			.then(done);
	});
});
