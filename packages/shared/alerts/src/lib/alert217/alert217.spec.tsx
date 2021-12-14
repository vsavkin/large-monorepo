import { render } from '@testing-library/react';

import Alert217 from './alert217';

describe('Alert217', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert217 />);
    expect(baseElement).toBeTruthy();
  });
});
