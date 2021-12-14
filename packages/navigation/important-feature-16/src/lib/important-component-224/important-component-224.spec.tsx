import { render } from '@testing-library/react';

import ImportantComponent224 from './important-component-224';

describe('ImportantComponent224', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent224 />);
    expect(baseElement).toBeTruthy();
  });
});
