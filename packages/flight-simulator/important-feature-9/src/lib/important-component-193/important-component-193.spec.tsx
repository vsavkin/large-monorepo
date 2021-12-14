import { render } from '@testing-library/react';

import ImportantComponent193 from './important-component-193';

describe('ImportantComponent193', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent193 />);
    expect(baseElement).toBeTruthy();
  });
});
