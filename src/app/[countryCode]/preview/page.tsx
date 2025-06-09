import { Button } from "@lib/components/ui/button"
import React from "react"

const PreviewPage = () => {
  return (
    <section>
      <h1 className="text-italic">Lorem ipsum dolor sit amet.</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h4>Lorem ipsum dolor sit amet.</h4>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <h6>Lorem ipsum dolor sit amet.</h6>
      <br />
      <p className="text-subtitle1">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="text-subtitle2">Lorem ipsum dolor sit amet consectetur.</p>
      <br />
      <p className="text-body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        molestiae eius dicta, fuga et ut quasi tempore animi molestias. Non
        optio error dolorum ex qui voluptas iure fugit repudiandae quibusdam.
        Sunt accusamus, necessitatibus voluptates ratione, aliquam, itaque
        magnam laboriosam quas in ullam vero corporis repellat repudiandae?
        Recusandae facere similique molestiae. Commodi odit officia laboriosam
        laborum, qui deleniti itaque id modi porro pariatur explicabo nobis
        magni, numquam illum suscipit dignissimos est doloremque similique
        corrupti, voluptatibus libero. Blanditiis ullam excepturi magnam
        adipisci explicabo quis consequuntur reprehenderit eveniet, omnis
        voluptates provident ducimus asperiores debitis, quasi cum at recusandae
        architecto. Quo neque eius dicta?
      </p>
      <p className="text-body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        molestiae eius dicta, fuga et ut quasi tempore animi molestias. Non
        optio error dolorum ex qui voluptas iure fugit repudiandae quibusdam.
        Sunt accusamus, necessitatibus voluptates ratione, aliquam, itaque
        magnam laboriosam quas in ullam vero corporis repellat repudiandae?
        Recusandae facere similique molestiae. Commodi odit officia laboriosam
        laborum, qui deleniti itaque id modi porro pariatur explicabo nobis
        magni, numquam illum suscipit dignissimos est doloremque similique
        corrupti, voluptatibus libero. Blanditiis ullam excepturi magnam
        adipisci explicabo quis consequuntur reprehenderit eveniet, omnis
        voluptates provident ducimus asperiores debitis, quasi cum at recusandae
        architecto. Quo neque eius dicta?
      </p>
      <br />
      <span className="text-caption">Lorem, ipsum dolor.</span>
      <span className="text-overline">Lorem, ipsum dolor.</span>
      <br />
      <div className="flex gap-4 items-center">
        <Button variant="default" size="default">
          Button
        </Button>
        <Button variant="default" size="lg">
          Button
        </Button>
        <Button variant="default" size="sm">
          Button
        </Button>
        <Button variant="default" size="icon">
          I
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <Button variant="outline" size="default">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="icon">
          I
        </Button>
      </div>

      <br />
    </section>
  )
}

export default PreviewPage
