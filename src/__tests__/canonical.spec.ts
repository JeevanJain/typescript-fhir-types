import { R4 } from '../index';

const T = new R4.scalars.canonical();
const value = "http://snomed.info/sct";
        
describe('Scalar canonocal', () => {
  
    test("should decode a valid value", () => {        
        expect(T.decode(value)._tag).toBe('Right');
      });
    
      test("should return the same reference if succeeded", () => {
        expect(T.decode(value).value).toEqual(value);
      });
    
      test("Should not decode invalid value", () => {
        expect(T.decode(2)._tag).toBe('Left');
      });
    
})
