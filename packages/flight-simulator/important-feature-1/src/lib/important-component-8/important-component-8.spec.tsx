import { render } from '@testing-library/react';

import ImportantComponent8 from './important-component-8';

describe('ImportantComponent8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent8 />);
    expect(baseElement).toBeTruthy();
  });
});
