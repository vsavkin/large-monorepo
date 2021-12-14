import { render } from '@testing-library/react';

import Alert97 from './alert97';

describe('Alert97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert97 />);
    expect(baseElement).toBeTruthy();
  });
});
