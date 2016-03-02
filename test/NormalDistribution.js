import { expect } from 'chai';
import NormalDistribution from '../src/NormalDistribution';

describe('NormalDistribution', () => {
  describe('#cdf', () => {
    it('should return 0.5 for a z-score of 0', () => {
      const nd = new NormalDistribution();
      expect(nd.cdf(0)).to.equal(0.5);
    });

    it('should return 0 for a z-score less than -3.5', () => {
      const nd = new NormalDistribution();
      expect(nd.cdf(-4)).to.equal(0);
    });

    it('should return 1 for a z-score more than 3.5', () => {
      const nd = new NormalDistribution();
      expect(nd.cdf(4)).to.equal(1);
    });
  });

  describe('#pdf', () => {
    it('should return 0.3989422804014327 for x = 0 on a standard normal distribution', () => {
      const nd = new NormalDistribution();
      expect(nd.pdf(0)).to.equal(0.3989422804014327);
    });

    it('should return 0.00013383022576488542 for a z-score of -4', () => {
      const nd = new NormalDistribution();
      expect(nd.pdf(-4)).to.equal(0.00013383022576488542);
    });

    it('should return 0.00013383022576488542 for a z-score of 4', () => {
      const nd = new NormalDistribution();
      expect(nd.pdf(4)).to.equal(0.00013383022576488542);
    });
  });

  describe('#probabilityBetween', () => {
    it('should return 1 between -4 and 4 for a standard normal distribution', () => {
      const nd = new NormalDistribution();
      expect(nd.probabilityBetween(-4, 4)).to.equal(1);
    });
  });
});