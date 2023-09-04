const router = require("express").Router();
const generateFakeData = require("../utils/FakeBalanceSheetData");
const Business = require("../models/Business");

// functioning of accounting provider
// generates a random balance sheet
router.post("/balance-sheet", async (req, res) => {
  try {
    const AccountingProviderData = generateFakeData();

    const { name, email, businessId } = req.body;

    const business = await Business.findById(businessId);
    // check to make sure that only the owner of the business can access the balance sheet
    if (business.userData.email !== email || business.userData.name !== name) {
      res.status(404).json("not yours");
    } else {
      // sample balance sheet
      res.status(200).json({
        name: name,
        email: email,
        business: {
          name: business.name,
          yearEst: business.yearEst,
          profitLossSummary: business.profitLossSummary,
          loanAmount: business.loanAmount,
        },
        balanceSheet: AccountingProviderData,
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
