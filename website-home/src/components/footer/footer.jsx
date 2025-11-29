import { Grid } from "@cloudscape-design/components";

const Footer = () => {
  return (
    <div id="page-footer">
      <div
        style={{
          color: "#5f6b7a",
          background: "#161d26",
          paddingTop: 10,
          borderTop: "1px solid #2a333f"
        }}
      >
        <Grid
          gridDefinition={[{ colspan: 2 }, { colspan: 10 }]}
        >
          <div
          style={{
          color: "#5f6b7a",
          paddingLeft: 20,
        }}
          >
            © 2025 Joy K. Chopra
          </div>
          <div
          style={{
          color: "#5f6b7a",
        }}
          
          >
            Notes written in my own words with reference to NPTEL and 
            GATE lectures. Not affiliated with NPTEL.
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;
