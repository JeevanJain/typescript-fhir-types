
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';




            export interface IDevice_Property {
                
                    /**
                     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
                     */
                    type : ICodeableConcept;
                    
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Property value as a quantity.
                     */
                    valueQuanity? : IQuantity[];
                    

                    /**
                     * Property value as a code, e.g., NTP4 (synced to NTP).
                     */
                    valueCode? : ICodeableConcept[];
                    
            }
        


        export const RTTI_Device_Property: t.Type<IDevice_Property> = t.recursion( 'IDevice_Property', () =>
            t.intersection([
                
        t.type({
           type: RTTI_CodeableConcept
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueQuanity: t.array(RTTI_Quantity),
valueCode: t.array(RTTI_CodeableConcept)
        })
        
            ])
        );
        

        