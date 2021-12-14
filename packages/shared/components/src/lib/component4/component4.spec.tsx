import { render } from '@testing-library/react';

import Component4 from './component4';

describe('Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
