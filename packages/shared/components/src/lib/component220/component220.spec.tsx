import { render } from '@testing-library/react';

import Component220 from './component220';

describe('Component220', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component220 />);
    expect(baseElement).toBeTruthy();
  });
});
