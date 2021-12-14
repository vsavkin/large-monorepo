import { render } from '@testing-library/react';

import Component218 from './component218';

describe('Component218', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component218 />);
    expect(baseElement).toBeTruthy();
  });
});
