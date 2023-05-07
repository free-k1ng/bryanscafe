<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- Menu Items XSL for developers -->

<xsl:template match="/">
  <html>
  <body>
    <h1>Music Collection:</h1>
    <table border="1">
      <tr bgcolor="#329acd">
        <th>Coffee</th>
        <th>Breakfast</th>
        <th>Lunch</th>
        <th>Dessert</th>
      </tr>
      <xsl:for-each select="*/*">
      <tr>
        <td><xsl:value-of select="item" /></td>
        <td><xsl:value-of select="item" /></td>
        <td><xsl:value-of select="item" /></td>
        <td><xsl:value-of select="item" /></td>
      </tr>
      </xsl:for-each>
    </table> 
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>


