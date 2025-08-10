import { screen } from '@testing-library/dom'
import { describe, it, expect } from 'vitest'
import { renderWithTheme } from '../../../../test/render-with-theme'
import CardWithActionButtons from '../card-with-action-buttons'

describe('CardWithActionButtons', () => {
  it('should render with minimal props', () => {
    const { container } = renderWithTheme(<CardWithActionButtons />)

    // Should render the card structure
    expect(container.firstChild).toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument()
  })

  it('should render title when provided', () => {
    renderWithTheme(<CardWithActionButtons title="Test Title" />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Title' })
    ).toBeInTheDocument()
  })

  it('should render description when provided', () => {
    renderWithTheme(<CardWithActionButtons description="Test Description" />)

    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
  })

  it('should render title and text with centered text', () => {
    renderWithTheme(
      <CardWithActionButtons
        title="Centered Title"
        description="Centered Description"
        centeredText
      />
    )

    const titleElement = screen.getByRole('heading', {
      level: 3,
      name: 'Centered Title',
    })
    const descriptionElement = screen.getByText('Centered Description')

    expect(descriptionElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toHaveStyle({ textAlign: 'center' })
    expect(titleElement).toHaveStyle({ textAlign: 'center' })
  })

  it('should render title and text without centered text by default', () => {
    renderWithTheme(
      <CardWithActionButtons
        title="Left Title"
        description="Left Description"
      />
    )

    const titleElement = screen.getByRole('heading', {
      level: 3,
      name: 'Left Title',
    })
    const descriptionElement = screen.getByText('Left Description')

    expect(descriptionElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).not.toHaveStyle({ textAlign: 'center' })
    expect(titleElement).not.toHaveStyle({ textAlign: 'center' })
  })

  it('should render children content', () => {
    renderWithTheme(
      <CardWithActionButtons>
        <div data-testid="child-content">Child Content</div>
      </CardWithActionButtons>
    )

    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('should render left buttons when provided', () => {
    const leftButtons = <button>Left Button</button>

    renderWithTheme(<CardWithActionButtons leftButtons={leftButtons} />)

    expect(
      screen.getByRole('button', { name: 'Left Button' })
    ).toBeInTheDocument()
  })

  it('should render right buttons when provided', () => {
    const rightButtons = <button>Right Button</button>

    renderWithTheme(<CardWithActionButtons rightButtons={rightButtons} />)

    expect(
      screen.getByRole('button', { name: 'Right Button' })
    ).toBeInTheDocument()
  })

  it('should render both left and right buttons', () => {
    const leftButtons = <button>Left</button>
    const rightButtons = <button>Right</button>

    renderWithTheme(
      <CardWithActionButtons
        leftButtons={leftButtons}
        rightButtons={rightButtons}
      />
    )

    expect(screen.getByRole('button', { name: 'Left' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Right' })).toBeInTheDocument()
  })

  it('should apply custom className to the card', () => {
    const { container } = renderWithTheme(
      <CardWithActionButtons className="custom-class" />
    )

    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })
})
