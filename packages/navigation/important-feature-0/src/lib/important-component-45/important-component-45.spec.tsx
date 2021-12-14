import { render } from '@testing-library/react';

import ImportantComponent45 from './important-component-45';

describe('ImportantComponent45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent45 />);
    expect(baseElement).toBeTruthy();
  });
});
