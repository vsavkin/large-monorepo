import { render } from '@testing-library/react';

import Component29 from './component29';

describe('Component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component29 />);
    expect(baseElement).toBeTruthy();
  });
});
