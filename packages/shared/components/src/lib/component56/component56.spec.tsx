import { render } from '@testing-library/react';

import Component56 from './component56';

describe('Component56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component56 />);
    expect(baseElement).toBeTruthy();
  });
});
