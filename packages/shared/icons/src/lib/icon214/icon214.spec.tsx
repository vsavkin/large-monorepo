import { render } from '@testing-library/react';

import Icon214 from './icon214';

describe('Icon214', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon214 />);
    expect(baseElement).toBeTruthy();
  });
});
