import { render } from '@testing-library/react';

import Icon225 from './icon225';

describe('Icon225', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon225 />);
    expect(baseElement).toBeTruthy();
  });
});
