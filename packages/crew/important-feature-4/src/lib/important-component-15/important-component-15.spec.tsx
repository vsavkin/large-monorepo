import { render } from '@testing-library/react';

import ImportantComponent15 from './important-component-15';

describe('ImportantComponent15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent15 />);
    expect(baseElement).toBeTruthy();
  });
});
