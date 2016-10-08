export class Item {
  name: string
  description: string
  aisle: number
  idealQuantity: number
  purchase: boolean
  _links: {
  	self: {
  		href: string
  	},
  	item: {
  		href: string
  	}
  }
}