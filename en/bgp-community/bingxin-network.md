# BGP Community

Routes announced by Bingxin Network (AS4242423374) may carry the following BGP communities:

### Informational Tags

| Community | Description |
|-----------|-------------|
| `4242423374:0:1` | Route source: self-announced (originated by this AS) |
| `4242423374:0:42` | Route source: external, received from a DN42 peer |
| `4242423374:1:<NODE_ID>` | Node: route originated from or received at `<NODE_ID>` |
| `4242423374:645:<REGION>` | Region: route originated from or received in `<REGION>` |
| `4242423374:645:<COUNTRY>` | Country: route originated from or received in `<COUNTRY>` |

### Export Control

| Community | Description |
|-----------|-------------|
| `4242423374:660:<REGION>` | Do not export the route to the specified region |
| `4242423374:660:<COUNTRY>` | Do not export the route to the specified country |
| `4242423374:661:<REGION>` | Export the route only to the specified region |
| `4242423374:661:<COUNTRY>` | Export the route only to the specified country |
| `4242423374:670:<ASN>` | Do not export the route to the specified AS |
| `4242423374:671:<ASN>` | Export the route only to the specified AS |
| `4242423374:680:<NODE_ID>` | Do not export the route from the specified node |
| `4242423374:681:<NODE_ID>` | Export the route only from the specified node |

### Prepend

| Community | Description |
|-----------|-------------|
| `4242423374:691:<ASN>` | Prepend 1x to all ASes except the specified AS |
| `4242423374:692:<ASN>` | Prepend 2x to all ASes except the specified AS |
| `4242423374:693:<ASN>` | Prepend 3x to all ASes except the specified AS |
| `4242423374:694:<ASN>` | Prepend 1x only to the specified AS |
| `4242423374:695:<ASN>` | Prepend 2x only to the specified AS |
| `4242423374:696:<ASN>` | Prepend 3x only to the specified AS |
| `4242423374:697:<REGION>` | Prepend 1x to all regions except the specified region |
| `4242423374:698:<REGION>` | Prepend 2x to all regions except the specified region |
| `4242423374:699:<REGION>` | Prepend 3x to all regions except the specified region |
| `4242423374:700:<REGION>` | Prepend 1x only to the specified region |
| `4242423374:701:<REGION>` | Prepend 2x only to the specified region |
| `4242423374:702:<REGION>` | Prepend 3x only to the specified region |
| `4242423374:703:<COUNTRY>` | Prepend 1x to all countries except the specified country |
| `4242423374:704:<COUNTRY>` | Prepend 2x to all countries except the specified country |
| `4242423374:705:<COUNTRY>` | Prepend 3x to all countries except the specified country |
| `4242423374:706:<COUNTRY>` | Prepend 1x only to the specified country |
| `4242423374:707:<COUNTRY>` | Prepend 2x only to the specified country |
| `4242423374:708:<COUNTRY>` | Prepend 3x only to the specified country |
| `4242423374:709:<NODE_ID>` | Prepend 1x to all nodes except the specified node |
| `4242423374:710:<NODE_ID>` | Prepend 2x to all nodes except the specified node |
| `4242423374:711:<NODE_ID>` | Prepend 3x to all nodes except the specified node |
| `4242423374:712:<NODE_ID>` | Prepend 1x only to the specified node |
| `4242423374:713:<NODE_ID>` | Prepend 2x only to the specified node |
| `4242423374:714:<NODE_ID>` | Prepend 3x only to the specified node |

### Community Attachments

| Community | Description |
|-----------|-------------|
| `4242423374:100666:<ASN>` | Append `(65535, 666)` blackhole to the specified AS (RFC 7999) |
| `4242423374:165281:<ASN>` | Append `(65535, 65281)` no-export to the specified AS |
| `4242423374:165282:<ASN>` | Append `(65535, 65282)` no-advertise to the specified AS |
| `4242423374:200666:<ASN>` | Append `(65535, 666)` blackhole to non-specified ASes |
| `4242423374:265281:<ASN>` | Append `(65535, 65281)` no-export to non-specified ASes |
| `4242423374:265282:<ASN>` | Append `(65535, 65282)` no-advertise to non-specified ASes |
