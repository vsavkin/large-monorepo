import { render } from '@testing-library/react';

import Component226 from './component226';

describe('Component226', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component226 />);
    expect(baseElement).toBeTruthy();
  });
});
