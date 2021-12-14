import { render } from '@testing-library/react';

import ImportantComponent34 from './important-component-34';

describe('ImportantComponent34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent34 />);
    expect(baseElement).toBeTruthy();
  });
});
