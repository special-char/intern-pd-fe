import ItemsTemplate from "./items"
import EmptyCartMessage from "../components/empty-cart-message"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
  onClose,
  onCartUpdate,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
  onClose?: () => void
  onCartUpdate?: () => Promise<void>
}) => {
  return (
    <div className="py-12">
      <div className="content-container" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="flex flex-col bg-white py-6 gap-y-6">
            <ItemsTemplate cart={cart} onCartUpdate={onCartUpdate} />
          </div>
        ) : (
          <div>
            <EmptyCartMessage onClose={onClose} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
