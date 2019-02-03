
        import { Address } from '../Resource/Address';
import { Attachment } from '../Resource/Attachment';
import { Code } from '../Scalar/Code';
import { ContactPoint } from '../Resource/ContactPoint';
import { Date } from '../Scalar/Date';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { HumanName } from '../Resource/HumanName';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Person_Link } from '../Resource/Person_Link';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum PersonGenderKind {
                male,
female,
other,
unknown
            }

        /**
         * Demographics and administrative information about a person independent of a specific health-related context. 
         */
        export class Person  {

            constructor() {
                
            }

            
                /**
                 * This is a Person resource
                 */
                ResourceType: string = 'Person;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Identifier for a person within a particular scope.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * A name associated with the person.
                 */
                Name? : Array<HumanName>;
                

                /**
                 * A contact detail for the person, e.g. a telephone number or an email address.
                 */
                Telecom? : Array<ContactPoint>;
                

                /**
                 * Administrative Gender.
                 */
                Gender? : PersonGenderKind;
                

                /**
                 * Extensions for gender
                 */
                _gender? : Element;
                

                /**
                 * The birth date for the person.
                 */
                BirthDate? : Date;
                

                /**
                 * Extensions for birthDate
                 */
                _birthDate? : Element;
                

                /**
                 * One or more addresses for the person.
                 */
                Address? : Array<Address>;
                

                /**
                 * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
                 */
                Photo? : Attachment;
                

                /**
                 * The organization that is the custodian of the person record.
                 */
                ManagingOrganization? : Reference;
                

                /**
                 * Whether this person's record is in active use.
                 */
                Active? : Boolean;
                

                /**
                 * Extensions for active
                 */
                _active? : Element;
                

                /**
                 * Link to a resource that concerns the same actual person.
                 */
                Link? : Array<Person_Link>;
                
        }
        