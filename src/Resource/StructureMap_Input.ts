
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';

        export enum StructureMap_InputModeKind {
                source,
target
            }

        /**
         * A Map of relationships between 2 structures that can be used to transform data. 
         */
        export class StructureMap_Input  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Name for this instance of data.
                 */
                Name? : Id;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Type for this instance of data.
                 */
                Type? : String;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * Mode for this instance of data.
                 */
                Mode? : StructureMap_InputModeKind;
                

                /**
                 * Extensions for mode
                 */
                _mode? : Element;
                

                /**
                 * Documentation for this instance of data.
                 */
                Documentation? : String;
                

                /**
                 * Extensions for documentation
                 */
                _documentation? : Element;
                
        }
        