import { render } from '@testing-library/react';

import Alert19 from './alert19';

describe('Alert19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert19 />);
    expect(baseElement).toBeTruthy();
  });
});
