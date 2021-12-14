import { render } from '@testing-library/react';

import Icon118 from './icon118';

describe('Icon118', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon118 />);
    expect(baseElement).toBeTruthy();
  });
});
