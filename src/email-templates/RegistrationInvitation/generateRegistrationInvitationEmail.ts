interface IRegistrationInvitationEmailArgs {
  registrationCode: string;
  registrationLink: string;
}

export const generateRegistrationInvitationEmail = (args: IRegistrationInvitationEmailArgs): string => {
  const { registrationCode, registrationLink } = args;
  
  return `
    <mjml>
      <mj-head>
        <mj-title>Wavemap Admin Registration Invitation</mj-title>
        <mj-attributes>
          <mj-class
            name="emailCradle"
            background-image="linear-gradient(0deg, #e4b8f9, #f6e7fd)"
          />	
          <mj-class
            name="detailText"
            align="center"
            color="black"
            font-size="16px"
            font-family="Arial"
            padding-bottom="30px"
          />
          <mj-class
            name="mainText"
            align="center"
            font-family="Arial"
            font-size="24px"
          />
          <mj-class
            name="codeCradle"
            width="40%"
            border="2px solid #9611d8"
          />
          <mj-class
            name="registrationCodeLabel"
            align="center"
            font-size="14px"
            color="black"
            font-family="Arial"
            text-transform="uppercase"
          />
          <mj-class
            name="registrationCode"
            align="center"
            font-size="14px"
            color="black"
            font-family="Arial"
            font-weight="bold"
          />
          <mj-class
            name="registrationBtn"
            background-color="#9611d8"
            color="white"
            href="wavemap.app/registration"
            font-family="Arial"
            font-size="14px"
            border-radius="4px"
            padding-left="5px"
            padding-right="5px"
            rel="noopener noreferrer"
            target="_blank"
          />
        </mj-attributes>
        <mj-style>
          .emailCradle {
            background-image: linear-gradient(0deg, #e4b8f9, #f6e7fd);
          }
        </mj-style>
      </mj-head>
      <mj-body css-class="emailCradle">
        <mj-section>
          <mj-column width="100%">
            <mj-image
              align="center"
              width="125px" src="https://res.cloudinary.com/dp2ss8bnf/image/upload/v1633493060/Wavemap/WaveIcon_gopbyz.png"
              alt="Wavemap logo"
            />
            <mj-text mj-class="mainText">
              Thank you for your interest in Wavemap.
            </mj-text>
            <mj-text mj-class="detailText">
              In order to register for your administrator account, click on the link below and use the code provided in this email.
            </mj-text>
          </mj-column>
          <mj-column mj-class="codeCradle">
            <mj-text mj-class="registrationCodeLabel">
              Registration Code
            </mj-text>
            
            <mj-text mj-class="registrationCode">${registrationCode}</mj-text>
          </mj-column>
        </mj-section>
        
        <mj-section padding-top="0px">
          <mj-column>
            <mj-button
              mj-class="registrationBtn"
              href="${registrationLink}"
              rel="noopener noreferrer"
              target="_blank"
            >
              Register for your Account
            </mj-button>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `;
}