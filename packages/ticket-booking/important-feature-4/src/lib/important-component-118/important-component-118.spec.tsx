import { render } from '@testing-library/react';

import ImportantComponent118 from './important-component-118';

describe('ImportantComponent118', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent118 />);
    expect(baseElement).toBeTruthy();
  });
});
