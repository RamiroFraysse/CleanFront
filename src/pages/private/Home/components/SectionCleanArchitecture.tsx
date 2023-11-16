import {
  P,
  H2,
  Span,
  Li,
  Article,
  Section,
  H1,
  Img,
} from "@/styled-components";
import { MAIN_GREEN_COLOR, PINK_COLOR } from "@/utilities";
import imgCAFE from "@/assets/img/CAFE.png";
import imgCA from "@/assets/img/CA.png";

function SectionCleanArchitecture() {
  return (
    <Article>
      <Section>
        <H1>Clean architecture</H1>
        <Img src={imgCA} alt="Frontend clean architecture img" />
        <div>
          <P>
            The Clean Architecture is a set of principles and design patterns
            for software proposed by software engineer Robert C. Martin. The
            idea behind it is to create software systems that are modular,
            maintainable, and independent of external layers, facilitating
            adaptation to changes and improvements over time. This architecture
            is structured in layers, where each layer has its responsibilities.
          </P>
          <P>
            The central idea is that the internal layers (Domain and Use Cases)
            should not depend on the external layers. This independence, in
            addition to facilitating testing, allows the framework to be
            agnostic, meaning it can be easily changed to different technologies
            without affecting the core of the application
          </P>
          <P>
            The goal is to create systems that are flexible, maintainable, and
            adaptable as organizational requirements change over time. It also
            encourages a clear separation of responsibilities and independence
            from external implementation details
          </P>
        </div>
        <div>
          <H2 $color={MAIN_GREEN_COLOR}>Domain Layer</H2>
          <P>
            <Span $color={PINK_COLOR}>Purpose: </Span>
            Contains the fundamental entities and business rules of the
            application.
          </P>
          <P>
            <Span $color={PINK_COLOR}>Components: </Span>
            Data models, business logic, entities, and any elements crucial to
            the core funcionality.
          </P>
        </div>
        <div>
          <H2 $color={MAIN_GREEN_COLOR}>Use Cases Layer</H2>
          <P>
            <Span $color={PINK_COLOR}>Purpose: </Span>
            Holds the application logic and defines how domain entities are used
            to perform specific use cases.
          </P>
          <P>
            <Span $color={PINK_COLOR}>Components: </Span>
            Implementations of use cases, flow orchestrators, application
            services.
          </P>
        </div>
        <div>
          <H2 $color={MAIN_GREEN_COLOR}>Adapters Layer</H2>
          <P>
            <Span $color={PINK_COLOR}>Purpose: </Span>
            Converts application data into a format understandable by external
            layers and vice versa. This layer acts as a bridge between internal
            and external layers.
          </P>
          <P>
            <Span $color={PINK_COLOR}>Components: </Span>
            User interface controllers, presenters, data gateways (interfaces
            for accessing persistence), adapters for external frameworks.
          </P>
        </div>
        <div>
          <H2 $color={MAIN_GREEN_COLOR}>External Services Layer</H2>
          <P>
            <Span $color={PINK_COLOR}>Purpose: </Span>
            Contains implementation details and external technologies, such as
            databases, frameworks and external services.
          </P>
          <P>
            <Span $color={PINK_COLOR}>Components: </Span>
            Concrete implementations of data gateways, adapters for specific
            frameworks, external services.
          </P>
        </div>
        <div>
          <H2 $color={MAIN_GREEN_COLOR}>Key Principles</H2>
          <ol>
            <Li>
              <P>
                The internal layers should not depend on the external layers.
              </P>
            </Li>
            <Li>
              <P>
                Business logic and key entities should reside in the Domain
                Layer to ensure independence from external implementation
                details
              </P>
            </Li>
            <Li>
              <P>
                The Use Cases Layer acts as an intermediary between the Domain
                Layer and the Adapters Layer, orchestrating the execution of use
                cases
              </P>
            </Li>
            <Li>
              <P>
                This design facilitates modification and testing of business
                logic without being affected by user interface details or
                external infrastructure. Additionally, it allows changes in
                external technologies without affecting the essence of the
                application. The separation of responsibilities and dependency
                inversion are key aspects of the Clean Architecture
              </P>
            </Li>
          </ol>
        </div>
      </Section>
      <Section>
        <H1>Frontend Clean architecture</H1>
        <Img src={imgCAFE} alt="Frontend clean architecture img" />
        <div>
          <P>
            <Span $color={MAIN_GREEN_COLOR}>Domain Layer: </Span>
            Models: Typescrips interfaces representing entities in our
            application. State: This is where we store entities at different
            lifecycle stages of our application.
          </P>
          <P>
            <Span $color={MAIN_GREEN_COLOR}>Use cases layer: </Span>
            Components: House the business logic; they are the ones that will
            operate on the entities from the domain layer.
          </P>
          <P>
            <Span $color={MAIN_GREEN_COLOR}>Adapters layer: </Span>
            Information from various services should be handled by an "adapter."
            This adapter is responsible for adjusting that information,
            decoupling it from the service. This way, if the information changes
            in the future, we can make that change in one central place.
          </P>
          <P>
            <Span $color={MAIN_GREEN_COLOR}>External services layer: </Span>
            It involves making calls to various services or APIs. In this
            context, we connect with external services to retrieve or send
            information, enabling communication with other parts of the
            application or external resources. This practice centralizes and
            manages these interactions efficiently
          </P>
        </div>
      </Section>
    </Article>
  );
}
export default SectionCleanArchitecture;
