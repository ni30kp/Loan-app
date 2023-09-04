const router = require("express").Router();

// simulates the decision engine
// Processess the balance sheet data and gives it a preassessment score
router.post("/", async (req, res) => {
  try {
    // balance sheet that is received from the accounting engine
    const businessData = req.body;
    const loanAmount = businessData.business.loanAmount;
    let totalProfitOrLoss = 0;
    let totalAssetValue = 0;

    for (const entry of businessData.balanceSheet) {
      totalProfitOrLoss += entry.profitOrLoss;
      totalAssetValue += entry.assetsValue;
    }

    const avgAssetValue = totalAssetValue / 12;

    const finalData = {
      name: businessData.business.name,
      yearEst: businessData.business.yearEst,
      profitLossSummary: totalProfitOrLoss,
    };

    if (parseInt(avgAssetValue) > parseInt(loanAmount)) {
      res.status(200).json({ ...finalData, preAssessment: 100 });
    } else if (parseInt(totalProfitOrLoss) > 0) {
      res.status(200).json({ ...finalData, preAssessment: 60 });
    } else {
      res.status(200).json({ ...finalData, preAssessment: 20 });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
