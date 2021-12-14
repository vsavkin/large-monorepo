import { render } from '@testing-library/react';

import Icon31 from './icon31';

describe('Icon31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon31 />);
    expect(baseElement).toBeTruthy();
  });
});
