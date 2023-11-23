import { ReactNode } from "react"
import "./ContentBlock.css"
import PropTypes from "prop-types"

type ContentBlockProps = {
  title: string
  subtitle: string
  image: string
  children: ReactNode
}

function ContentBlock({ title, subtitle, image, children }: ContentBlockProps) {
  return (
    <div className={`ContentBlock ${image ? "" : "flex"}`}>
      <div className="Content">
        <div className="Title">
          <h2>{title}</h2>
          <div>{subtitle}</div>
          {image && (
            <div className="SmallImage">
              <img src={image} alt={title} />
            </div>
          )}
        </div>
        {children}
      </div>
      {image && (
        <div className="Image">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  )
}

ContentBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
}

ContentBlock.defaultProps = {
  title: "",
  subtitle: "",
  image: null,
  children: null,
}

export default ContentBlock
