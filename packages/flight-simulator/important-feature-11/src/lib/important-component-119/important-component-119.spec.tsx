import { render } from '@testing-library/react';

import ImportantComponent119 from './important-component-119';

describe('ImportantComponent119', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent119 />);
    expect(baseElement).toBeTruthy();
  });
});
