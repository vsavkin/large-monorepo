import { render } from '@testing-library/react';

import Icon98 from './icon98';

describe('Icon98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon98 />);
    expect(baseElement).toBeTruthy();
  });
});
